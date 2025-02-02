const SeeMore = ({
    currentlyShowing = 12,
    totalResults = 12,
    onShowMore = () => console.log('Loading more results...'),
    isLoading = false
  }) => {
    if (currentlyShowing >= totalResults) {
      return (
        <div className="text-center text-neutral-600 text-sm p-10">
          Showing {currentlyShowing} of {totalResults} results
        </div>
      );
    }
  
    return (
      <div className="text-center py-8 space-y-6">
        <div className="text-center text-neutral-600 text-sm p-10">
          Showing {currentlyShowing} of {totalResults} results
        </div>
        <button
          onClick={onShowMore}
          disabled={isLoading}
          className="px-8 py-2 border-2 border-neutral-400 rounded-full hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isLoading ? 'Loading more results...' : 'Show more results'}
        >
          {isLoading ? 'Loading...' : 'See more'}
        </button>
      </div>
    );
  };
  
  export default SeeMore;