import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numberOfGuesses }) {
  return (
    <Banner bannerType="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${numberOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
