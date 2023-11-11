import './header.css'
export default function Header() {
    return <header className='app-header'>
        <div className='app-header-contents'>
            <div className='app-header-left bold'>
                <img className='app-hover-logo' src='/cat.svg' alt='logo'/>
                {/* <a className="app-header-item-desktop" href="https://dashtoon.com/">DashToon</a> */}
            </div>
            <div className='app-header-right bold'>
                <a className="app-header-item-desktop" href="https://dashtoon.com/">DashToon</a>
            </div>
            <div className='app-header-right bold'>
                {/* <img className='app-hover-logo' src='/github.svg' height={24} width={24} alt='Fork'/> */}
                <img className='app-hover-logo' src='/question-mark.svg' alt='logo' height={24} width={24}/>
                {/* <a className='app-header-item selected link-style'> Guide</a> */}
            </div>
        </div>
    </header>
}