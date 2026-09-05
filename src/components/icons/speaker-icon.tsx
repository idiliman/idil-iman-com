type SpeakerIconProps = React.ComponentProps<"svg"> & {
  muted?: boolean;
};

export function SpeakerIcon({
  muted = false,
  className,
  ...props
}: SpeakerIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      {muted ? (
        <>
          <path d="m16 9 6 6" />
          <path d="m22 9-6 6" />
        </>
      ) : (
        <>
          <path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" />
          <path d="M18 7a6.5 6.5 0 0 1 0 10" />
        </>
      )}
    </svg>
  );
}
