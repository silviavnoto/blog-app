export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <a href="/blog/b1">Blog 1</a>
                <a href="/blog/b2">Blog 2</a>
            </nav>
            <section>{children}</section>
        </div>
    );
}

