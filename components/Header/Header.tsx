import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <div>
                <h1>JS UP</h1>
                <nav>
                    <Link href="/flex">Flex</Link>
                    <Link href="/grid">Grid</Link>
                    <div>lang</div>
                </nav>
            </div>
        </header>
    );
};