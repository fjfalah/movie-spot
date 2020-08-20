import React, { useEffect, useCallback } from 'react';

import styled from '../themes';

type InfiniteScrollType = {
  onLoadMore: () => void;
  hasMore: boolean;
  loader: React.ReactNode;
  children: React.ReactNode;
};

const Root = styled.div``;

const InfiniteScroll: React.FC<InfiniteScrollType> = (props) => {
  const { children, onLoadMore, hasMore, loader } = props;
  const handleScroll = useCallback(() => {
    const isEndOfScroll =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;
    if (!isEndOfScroll) return;
    if (hasMore) {
      onLoadMore();
    }
  }, [onLoadMore, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <Root>
      {children}
      {hasMore && loader}
    </Root>
  );
};

export default InfiniteScroll;
