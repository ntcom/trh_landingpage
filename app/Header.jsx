import user from '@/public/phone.svg'

export default function Header() {
  return (
    <div className="w-full">
        <div className="w-full bg-[#fff] flex justify-between">
            <div>
                <div><img src={user} alt="sad" /><p>800-123-45-67</p></div>
            </div>
        </div>
        <header></header>
    </div>
  )
}
