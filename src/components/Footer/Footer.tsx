
import { FooterLink } from '../../Utils/constants';
import './Footer.scss'; 

interface FooterProps {
  links: FooterLink[]; 
}

const Footer = ({links}: FooterProps) => {
  return (
    <footer className='footer'>
      <div className="links">
        {links.map(link => {
          return (
            <button
              key={link.id}
              type='button'
              className='links__link'
            >
            {link.text}
            </button>
          )
        })}
      </div>
      <div className="copy-right">
        © Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This does NOT apply if you plan to produce your own course or tutorials based on this project.
      </div>
    </footer>
  )
}

export default Footer
