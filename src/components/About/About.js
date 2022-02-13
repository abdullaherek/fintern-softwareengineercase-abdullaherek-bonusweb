import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function About() {
  return (
    <div>
      <Header />
      <div>
        <p style={{ fontSize: "1.3rem", color: "black", margin: "2rem" }}>
          Privacy Policy Effective Date: December 31, 2019 When using any of our
          products or interacting with themoviedb.org which is owned and
          operated by TiVo Corporation, TiVo Platform Technologies LLC, TiVo
          Solutions, Inc., or Rovi Corporation or any of our subsidiaries that
          link to this Privacy Policy (collectively, “TMDB,” “we,” “our”, or
          “us”) that do not have a separate privacy policy, you consent to the
          collection, transfer, storage, processing, disclosure and use of your
          information as described in this Privacy Policy. This includes any
          information you choose to provide that is deemed sensitive under
          applicable law. If you do not agree with the terms of this Privacy
          Policy, you should not use TMDB products (a TMDB account or API
          access), or access or interact with any other aspect of TMDB’s
          business.
          <p>
            We collect and process data that we use to provide you with TMDB
            products, notify you of changes to our policies or products,
            identify or troubleshoot issues, conduct surveys, improve the
            products we provide to you, market and advertise our products
            including providing advertising to you, and otherwise operate our
            business. Your rights to your personal data and its collection and
            use are outlined in this policy.
          </p>
          <p>
            If you have a disability and need this policy provided to you in a
            different format please email privacy@tivo.com. Exceptions: Third
            Parties This Privacy Policy does not apply to any third-party
            applications or software that integrate with TMDB products, or any
            other third-party products, services, or businesses. BY ACCEPTING
            THE PRIVACY POLICY, YOU EXPRESSLY AUTHORIZE TMDB TO USE AND SHARE
            WITH OTHER AFFILIATES OF TIVO CORPORATION, AS WELL AS CERTAIN
            TRUSTED BUSINESS PARTNERS AND SERVICE PROVIDERS, WHICH MAY BE
            LOCATED OUTSIDE OF THE COUNTRY OF YOUR RESIDENCE (INCLUDING
            COUNTRIES WHICH DO NOT PROVIDE THE SAME LEVEL OF PROTECTION FOR THE
            PROCESSING OF PERSONAL DATA AS THE COUNTRY OF YOUR RESIDENCE), THE
            INFORMATION PROVIDED BY YOU TO TMDB, YOU ACKNOWLEDGE AND AGREE TO
            THE IMPORTANCE OF SHARING SUCH INFORMATION FOR THE PROVISION OF THE
            TMDB PRODUCTS. THIS CONSENT IS GIVEN FOR THE DURATION OF YOUR
            RELATIONSHIP WITH TMDB.
          </p>
        </p>
      </div>
      <Footer />
    </div>
  );
}
