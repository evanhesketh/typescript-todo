import "./QuoteDisplay.css";
import { QuoteInterface } from "./interfaces";

/** QuoteDisplay component that shows a quote
 * and a button that will retrieve a new quote
 *
 * Props:
 * - getQuote: fn() that retrieves a random quote from API
 * - quote: state of current quote
 *
 * State: none
 */

interface QuoteDisplayPropsInterface {
  getQuote: () => Promise<void>,
  quote: QuoteInterface | null
}
function QuoteDisplay({ getQuote, quote }: QuoteDisplayPropsInterface) {

  function firstQuote() {
    return <div className="QuoteDisplay">
      <button
          className="btn-sm QuoteDisplay-button"
          onClick={getQuote}>Click here for an inspirational quøte!
      </button>
    </div>
  }

  function showQuote() {
    return <div className="QuoteDisplay">
      <p><i>{quote?.text} - {quote?.author}</i></p>
      <button
          className="btn-sm QuoteDisplay-button"
          onClick={getQuote}>Nü quøte
      </button>
    </div>

  }

  if (quote) {
    return showQuote();
  } else {
    return firstQuote();
  }
};

export default QuoteDisplay;