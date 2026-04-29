export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Muhammad Usman Mumtaz. Built with care.</p>
        <p>AI Engineer · Learning · Building</p>
      </div>
    </footer>
  );
}
