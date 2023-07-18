import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

import QuoteDisplay from "./QuoteDisplay";
import { QuoteInterface } from "./interfaces";

/** Component that retrieves and sets an inspirational quote,
 * shown by a child component (QuoteDisplay).
 *
 * Props:
 * - None
 *
 * State:
 * - [quote, setQuote]: the current quote
 *
 * App -> QuoteApp -> QuoteDisplay
 */
function QuoteApp() {
  const [quote, setQuote] = useState<QuoteInterface | null>(null);

  /** retrieve a random quote from quotes API */
  async function getQuote(): Promise<void> {
    try {
      const response: AxiosResponse<{ quote: QuoteInterface }> = await axios.get(
        "https://inspo-quotes-api.herokuapp.com/quotes/random"
      );
      const randomQuote = response.data.quote;
      setQuote(randomQuote);
    } catch{
      setQuote(null);
    }
  }

  return <QuoteDisplay getQuote={getQuote} quote={quote} />;
}

export default QuoteApp;
