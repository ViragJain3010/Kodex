import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ResetIcon } from '@radix-ui/react-icons';

export function ResetDialog({ onReset }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <ResetIcon className="inline-block mr-2 h-4 w-4" />
          Reset
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-gray-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
            Are you sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            This action will reset your code to the default snippet. Any unsaved changes will be
            lost.
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end space-x-2">
            <AlertDialog.Cancel asChild>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={onReset}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Continue
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
