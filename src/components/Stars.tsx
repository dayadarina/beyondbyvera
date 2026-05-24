export default function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i <= rating ? "#C68B6B" : "none"}
          stroke="#C68B6B"
          strokeWidth="1.5"
        >
          <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62L22 9.24l-5.46 4.73L18.18 21z" />
        </svg>
      ))}
    </div>
  );
}
