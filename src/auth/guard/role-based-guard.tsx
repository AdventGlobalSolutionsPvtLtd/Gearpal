// ----------------------------------------------------------------------

export interface RoleBasedGuardProp {
  currentRole: string;
  hasContent?: boolean;
  acceptRoles: string[];
  children: React.ReactNode;
}

export function RoleBasedGuard({
  children,
  hasContent,
  currentRole,
  acceptRoles,
}: RoleBasedGuardProp) {
  if (typeof acceptRoles !== "undefined" && !acceptRoles.includes(currentRole)) {
    return hasContent ? (
      <div className="container">
        <div>
          <h3>Permission denied</h3>
        </div>

        <div>
          <em>You do not have permission to access this page.</em>
        </div>
      </div>
    ) : null;
  }

  return <> {children} </>;
}
