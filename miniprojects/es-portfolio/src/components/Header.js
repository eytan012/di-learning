import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className={'header-wraper'}>
            <div className="main-info">
                <h1>Hello, I am Eytan Sayada</h1>
                <Typed
                    className={'typed-text'}
                    strings={["Web Developement",
                        "Web Developement",
                        "Web Developement",
                        "Web Developement"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className={'btn-main-offer'}>Contact me</a>
            </div>
        </div>

        // <div className="jumbo p-5 text-center bg-image rounded-3">
        //     <div className="mask">
        //         <div className="d-flex justify-content-center align-items-center h-100">
        //             <div className="text-white">
        //                 <h1 className="mb-3">Heading</h1>
        //                 <h4 className="mb-3">Subheading</h4>
        //                 <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Header;
