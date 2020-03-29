import React from 'react';

import { Link } from 'react-router-dom';

const Footer = (props) => {
  console.log(props);

  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Heading</h2>
            <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
            <p><Link href="/" to="/"><i className="fa fa-facebook-square mr-1"></i></Link><a href="/"><i className="fa fa-linkedin-square"></i></a></p>
          </div>
          
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>- <Link href="/" to="/">Lorem ipsum</Link></li>
              <li>- <Link href="/" to="/">Nam mauris velit</Link></li>
              <li>- <Link href="/" to="/">Etiam vitae mauris</Link></li>
              <li>- <Link href="/" to="/">Fusce scelerisque</Link></li>
              <li>- <Link href="/" to="/">Sed faucibus</Link></li>
              <li>- <Link href="/" to="/">Mauris efficitur nulla</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
            <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col copyright">
            <p className=""><small className="text-white-50">© 2020. Gard Grønvik.</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;