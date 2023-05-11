import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet, eius dissentias per ea, harum
            delicatissimi te eos. Erant putant erroribus per in, eu ludus dolore
            cum. Eu mea aeque everti, no mea esse denique, vix summo partem
            dissentiet ne. Quodsi doctus pertinax in eum, vim elitr sadipscing
            no. Per in delectus deseruisse intellegebat. Ne homero essent sit.
          </p>
          <p>Bog of the Future All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link 1</p>
          <p className="my-5">Link 2</p>
          <p>Link 3</p>
        </div>

        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Address 1</p>
          <p className="my-5">Address 2</p>
          <p>+44 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
