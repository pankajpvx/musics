export const FavoriteSvg = ({
  size = 24,
  color,
  className = "",
  onFavouriteClick,
}) => {
  const hasColor = color !== undefined;
  return (
    <svg
      width={size}
      height={size}
      onClick={onFavouriteClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`heart-icon-svg ${className}`}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={hasColor ? color : "none"}
        stroke={hasColor ? "none" : "currentColor"}
        strokeWidth={hasColor ? 0 : 1.4}
      />
    </svg>
  );
};
