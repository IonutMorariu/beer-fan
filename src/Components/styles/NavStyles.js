import styled from 'styled-components';

const NavStyles = styled.nav`
	.main-logo {
		font-family: 'Rye';
		font-size: 3.6rem;
		display: grid;
		grid-template-columns: 3fr 1fr 3fr;
		grid-gap: 2rem;
		justify-content: center;
		align-items: center;
		h1 {
			font-weight: normal;
			margin: 0;
		}
		.logo-image {
			width: 100%;
			height: auto;
		}
		.first-word {
			text-align: right;
		}
		.second-word {
			text-align: left;
		}
	}
`;

export default NavStyles;
