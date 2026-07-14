export default function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-16 pt-20">
      <div className="h-6 w-48 animate-pulse rounded-full bg-black/5 dark:bg-white/5" />
      <div className="h-12 w-full max-w-xl animate-pulse rounded-2xl bg-black/5 dark:bg-white/5" />
      <div className="h-64 w-full max-w-md animate-pulse rounded-3xl bg-black/5 dark:bg-white/5" />
    </div>
  );
}
