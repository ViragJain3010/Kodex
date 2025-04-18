export function formatExecutionTime(ms) {
  if (ms < 1) {
    return '< 1 ms';
  } else if (ms < 1000) {
    return `${ms.toFixed(0)} ms`;
  } else if (ms < 60000) {
    return `${(ms / 1000).toFixed(2)} s`;
  } else {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(2);
    return `${minutes}m ${seconds}s`;
  }
}
