import React          from "react"
import Collapsible from 'react-collapsible';
import styled         from "styled-components";
import { textStyles } from '../styles/vars'
import { below }     from "../styles/functions";
import { GoLink } from "../components/FindLink"

const PLinks = function( {data} ) {
	return(
		<div>
			<div className="wrapper padd">
				<H1>Glasshouse</H1>
				<ButtonContainer className="Button" download href="/images/agents-login/glasshouse.zip" >Download All</ButtonContainer>
        <Banner> 
					<div className="Grid">
						<div className="Grid-col col-05 stacked">
							<SubButton className="Button" href="/images/agents-login/agent-agreement.pdf" target="_blank" >Agent Agreement</SubButton>
						</div> 
						<div className="Grid-col col-05 stacked">
							<SubButton className="Button" href="/images/agents-login/glasshouse/brochure.pdf" target="_blank" >Brochure</SubButton>
						</div> 
					</div>
				</Banner> 
				<Banner> 
				<div className="Grid">
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/glasshouse/glasshouse.zip" >Renders</SubButton>
					</div> 
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/glasshouse/floorplans.pdf" target="_blank" >Floor Plan</SubButton>
					</div>
				</div>
				</Banner>
				<Banner> 
				<div className="Grid">
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/glasshouse/pricelist.pdf" target="_blank" >Pricelist</SubButton>
					</div> 
					<div className="Grid-col col-05 stacked">
						<SubButton className="Button" href="/images/agents-login/glasshouse/reservation.pdf" target="_blank" >Reservation</SubButton>
					</div>
				</div>
				</Banner>
      </div>
		</div>
	)
}



export default PLinks

const ButtonContainer = styled.a`
	border: 1px solid currentColor;
	margin-bottom: 50px;
	${below.phone`
		margin-bottom: 25px;
	`};
	color: #000;
	font-family: 'Neutra Text TF';
	font-weight:700; 
  height: 3.2em;
  ${below.phone`
  	height: 3.0em;
	`};
	:hover {
    background-color: #000;
    color: white;
	} 
  text-align: center;
  padding: 0 6.916666666666667em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 15em;
  transition: all 0.2s linear;
  white-space: nowrap;
  border-radius: 0;
	background: none; 
	font-size: 2rem;
	line-height: 1;
	letter-spacing: 0.33em;
	text-transform: uppercase;	
	cursor: pointer;
` 
const SubButton = styled.a`
border: 1px solid currentColor;
color: #000; 
font-family: 'Neutra Text TF';
font-weight:700;
height: 5.2em;
${below.phone`
	height: 5em;
`};
:hover {
	background-color: #000;
	color: white;
} 
text-align: center;
padding: 0 6.916666666666667em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;
width: 22em;
${below.phone`
	width: 100%;
`};
transition: all 0.2s linear;
white-space: nowrap;
border-radius: 0;
background: none; 
font-size: 1.5rem;
line-height: 1;
letter-spacing: 0.33em; 
cursor: pointer;
${below.phone`
margin-bottom: 1.5em;
`}; 
margin-bottom:3em;
`
const Banner = styled.div` 
  p {
    margin-bottom: .1rem;
  }

  h2 {
    text-align:left;
    color: #000;
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 200;
    border-bottom: 2px solid #ddd;
		position: relative;

		&:first-of-type{
			border-top: 2px solid #ddd;

		}
  }
  
  .Collapsible__trigger {
    font-size: 2rem;
    font-weight: 500;
    color: #000;
    display: block;
		padding: 15px 20px;
		cursor: pointer;

		position: relative;
		&:after{
			content: '';
			display: block; 
			width: 20px; 
			height: 20px;
			position: absolute;
			right:15px;
			top: 20px;
			background-size: cover;
			background-image: url('/images/right.png');
		}
  }
  span.Collapsible__trigger.is-open {
		&:after{
			transform: rotate(90deg);

		}
  }
  .Collapsible__contentInner {
		padding: 15px 20px;
		img{
			width: 45%;
			margin: 2%;
			display:inline-block;
			${below.tablet`
				width: 100%;
				`};
		}
  }
	.Collapsible__contentOuter{
		background: #F3F3F3;
	}

  ${below.tablet`
    padding:0rem 15px;

    h2 {
      font-size:2.4rem;
      line-height:1.3;
    }
  `};
`
const H1 = styled.h1`
  ${textStyles.h1}
  color:#000;
  padding-bottom:30px;
  padding-top:60px;
  &.padd{
    padding-top:4.5rem;
    padding-bottom:4.5rem;
  }
`

const Embed = styled.embed`
	width: 100%;
	height: 500px;
	border: 2px solid #666;

`
const Video = styled.video`
	width: 100%;
	height: 500px;
	max-width: 500px;

`

const Download = styled.a`
			display: block; 
			width: 20px; 
			height: 20px;
			position: absolute !important;
			right:45px;
			top: 20px;
			background-size: cover;
			background-image: url('/images/download.png');
			padding:0 !important;
			&:after{
				display: none !important;
			}
`

const Hr = styled.hr`
  margin:0;
  border-style:none;
`
