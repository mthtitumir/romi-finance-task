import Link from "next/link"

const PrimaryButton = ({href, text}) => {
    return (
        <button>
            <Link href={href} className="px-4 py-2 bg-teal-600 rounded-sm hover:bg-teal-800">
                {text}
            </Link>
        </button>
    )
}

export default PrimaryButton