import { useBranding } from '../hooks/useBranding';
import { ExerciseInfo } from './ExerciseInfo';

export function Header() {
  const { logoUrl, productName } = useBranding();

  return (
    <header className="bg-canvas border-b-2 border-contrast-low p-fluid-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-static-md">
          <img src={logoUrl} alt={productName} className="h-10" />
        </div>
        <div className="max-w-md">
          <ExerciseInfo title="White-Label Branding">
            <p>
              This logo updates dynamically via the <strong>useBranding</strong> hook.
              The browser favicon and page title also change when you switch tenants.
              Try switching between ACME and TechFlow above.
            </p>
          </ExerciseInfo>
        </div>
      </div>
    </header>
  );
}
