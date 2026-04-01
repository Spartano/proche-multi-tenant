import { useBranding } from '../hooks/useBranding';
import { ExerciseInfo } from './ExerciseInfo';

export function Header() {
  const { logoUrl, productName } = useBranding();

  // TODO (Task 5): Replace the static "Product Name" text below with a dynamic <img>
  // element using logoUrl and productName from the useBranding hook above.
  // The hook is already imported and called for you.
  void logoUrl; // remove once implemented
  void productName; // remove once implemented

  return (
    <header className="bg-canvas border-b-2 border-contrast-low p-fluid-md">
      <div className="flex items-center justify-between">
        <span className="text-primary font-bold text-xl">Product Name</span>
        <div className="max-w-2xl">
          <ExerciseInfo title="White-Label Branding (Tasks 3 & 5)">
            <p>
              This static text should become a dynamic <code>&lt;img&gt;</code> driven by{' '}
              <strong>useBranding</strong>. The browser favicon and page title should also
              change when tenants switch. Try switching tenants — nothing changes yet.
            </p>
            <p className="mt-1">
              <strong>Task 3:</strong> Wire <code>updateFavicon</code> and{' '}
              <code>updateDocumentTitle</code> (already implemented in <code>branding.ts</code>)
              into <code>useBranding</code> via useEffect.{' '}
              <strong>Task 5:</strong> Use the hook here to render the tenant logo.
            </p>
          </ExerciseInfo>
        </div>
      </div>
    </header>
  );
}
