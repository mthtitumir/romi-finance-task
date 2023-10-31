import Link from "next/link"

const SecondaryButton = ({href, text}) => {
    return (
        <button>
            <Link href={href} className="px-4 py-2 primary-border rounded-sm hover:bg-teal-800">
                {text}
            </Link>
        </button>
    )
}

export default SecondaryButton