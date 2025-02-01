const SeeMore = ({
  currentlyShowing = 12,
  totalResults = 12,
  
  onShowMore = () => console.log('Loading more results...'),
  isLoading = false
}) => {
  const hasMoreResults = currentlyShowing < totalResults;

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 space-y-6">
      {/* Results count display */}
      <div className="text-center text-gray-600">
        Showing {currentlyShowing} of {totalResults} results
      </div>

      {/* Show more button - only displayed if there are more results */}
      {hasMoreResults && (
        <div className="flex justify-center">
          <button
            onClick={onShowMore}
            disabled={isLoading}
            className="px-8 py-2 border-2 border-neutral-400 rounded-full hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={isLoading ? 'Loading more results...' : 'Show more results'}
          >
            {isLoading ? 'Loading...' : 'See more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SeeMore;