"use client";

import { ConfluenceIcon } from '@atlaskit/logo';

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 flex items-center">
        <ConfluenceIcon appearance="brand" shouldUseNewLogoDesign size="small" />
      </div>
      <span className="font-semibold">Confluence UI Kit</span>
    </>
  );
}
