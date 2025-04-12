// components/Terminal.tsx
import React, { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import './xterm.css';

const TerminalComponent = ({ containerId }) => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const wsRef = useRef(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Initialize xterm.js
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
      },
    });

    // Add addons
    const fitAddon = new FitAddon();
    const webLinksAddon = new WebLinksAddon();
    term.loadAddon(fitAddon);
    term.loadAddon(webLinksAddon);

    // Open terminal in the container
    term.open(terminalRef.current);
    fitAddon.fit();

    // Connect to WebSocket
    const ws = new WebSocket(`ws://localhost:3001/terminal/${containerId}`);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('WebSocket connected');
      term.write('\r\n$ ');
    };

    ws.onmessage = event => {
      term.write(event.data);
    };

    ws.onerror = error => {
      console.error('WebSocket error:', error);
      term.write('\r\nConnection error. Please try again.\r\n');
    };

    // Handle terminal input
    term.onData(data => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'input', data }));
      }
    });

    // Handle terminal resize
    term.onResize(size => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(
          JSON.stringify({
            type: 'resize',
            cols: size.cols,
            rows: size.rows,
          })
        );
      }
    });

    // Handle window resize
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener('resize', handleResize);

    xtermRef.current = term;

    // Cleanup
    return () => {
      term.dispose();
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [containerId]);

  return (
    <div className="terminal-container h-full w-full">
      <div ref={terminalRef} className="h-full w-full" />
    </div>
  );
};

export default TerminalComponent;
