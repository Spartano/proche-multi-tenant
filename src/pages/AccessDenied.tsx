import { Link } from 'react-router-dom';
import { PHeading, PText, PButton, PIcon, PInlineNotification } from '@porsche-design-system/components-react';
import { useSession } from '../hooks/useSession';
import { ExerciseInfo } from '../components/ExerciseInfo';

export function AccessDenied() {
  const { session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-[70vh] p-fluid-lg">
      <div className="max-w-2xl text-center">
        <div className="mb-fluid-md">
          <PIcon name="lock" size="x-large" className="text-error" />
        </div>

        <PHeading size="large" tag="h1" className="mb-static-md">
          Access Denied
        </PHeading>

        <PText size="medium" className="text-contrast-medium mb-fluid-md">
          You do not have permission to access this page.
        </PText>

        <PInlineNotification
          state="error"
          heading="Insufficient Permissions"
          description={`Your current role (${session?.user.role}) and subscription tier (${session?.tier}) do not grant access to this feature.`}
          className="mb-fluid-md text-left"
        />

        <div className="mb-fluid-md text-left">
          <ExerciseInfo title="Access Denied — Route Guard in Action">
            <p>
              This page is shown when <strong>ProtectedRoute</strong> detects that the
              current role/tier combination doesn't satisfy the feature's access rule and
              redirects here via <code>&lt;Navigate to="/access-denied"&gt;</code>.
            </p>
            <p className="mt-1">
              <strong>To test:</strong> Try typing <code>/reports</code> or <code>/admin</code> directly
              in the URL bar with a Viewer on Tier 1. The nav should hide these links, but direct URL
              access must also be blocked — that's what this page proves.
            </p>
          </ExerciseInfo>
        </div>

        <div className="flex gap-static-md justify-center">
          <Link to="/dashboard">
            <PButton icon="home">Go to Dashboard</PButton>
          </Link>
          <PButton variant="secondary" icon="email">
            Contact Support
          </PButton>
        </div>
      </div>
    </div>
  );
}
