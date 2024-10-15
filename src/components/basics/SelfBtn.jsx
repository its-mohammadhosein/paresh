export default function SelfBtn({ children }) {
    return (
        <button
            className="bg-[#FFEEE2] hidden md:block border-[#FF7A00] min-w-[84px] min-h-[38px] rounded-[4px] border-[1px]">
            {children}
        </button>
    )
}