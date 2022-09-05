import React from 'react';
import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';

export default function TOC({ toc, editUrl, ...props }) {
  const isEmpty = toc.length <= 0;
  if (isEmpty) return null;

  return (
    <div className="toc-wrapper sticky top-8">
      <h2 class="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-0">Contents</h2>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage editUrl={editUrl} />
    </div>
  );
}
