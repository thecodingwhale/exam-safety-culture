import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body {
    // @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:100,300,400');
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    line-height: 1.4;
    color: #4c4c4c;
	}
	h1, h2, h3, h4, h5, h6 {
		font-family: 'Roboto', sans-serif;
	}
	h1 {
	    display: block;
	    font-size: 2em;
	    margin-top: 0.37em;
	    margin-bottom: 0.37em;
	    margin-left: 0;
	    margin-right: 0;
	    font-weight: 300;
	}
	h2 {
	    display: block;
	    font-size: 1.5em;
	    margin-top: 0.83em;
	    margin-bottom: 0.83em;
	    margin-left: 0;
	    margin-right: 0;
	    font-weight: 300;
	}
	h3 {
	    display: block;
	    font-size: 1.17em;
	    margin-top: 1em;
	    margin-bottom: 1em;
	    margin-left: 0;
	    margin-right: 0;
	    font-weight: 300;
	}
	h4 {
	    display: block;
	    margin-top: 1.33em;
	    margin-bottom: 1.33em;
	    margin-left: 0;
	    margin-right: 0;
	    font-weight: 300;
	}
	h5 {
	    display: block;
	    font-size: .83em;
	    margin-top: 1.67em;
	    margin-bottom: 1.67em;
	    margin-left: 0;
	    margin-right: 0;
	    font-weight: 300;
	}
	h6 {
	    display: block;
	    font-size: .67em;
	    margin-top: 2.33em;
	    margin-bottom: 2.33em;
	    margin-left: 0;
	    margin-right: 0;
	    font-weight: 300;
	}
	.text-center {
		text-align: center;
	}
	.font-small {
		font-size: 70%;
	}
	.font-italic {
		font-style: italic;
	}
	.font-bold {
		font-weight: bold;
	}
	.visible-xs {
		display: none;
	  @media (max-width: 767px) {
	    display: inline-block !important;
	  }
	}
	.hidden-xs {
		display: inline-block;
	  @media (max-width: 767px) {
	    display: none !important;
	  }
	}
`;