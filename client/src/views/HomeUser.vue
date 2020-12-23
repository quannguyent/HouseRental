<template>
	<mdb-container>
		<mdb-view hover>
			<a href="#!">
				<mdb-card-image
					src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
					alt="Card image cap"/>
				<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
			</a>
		</mdb-view>
		<mdb-card-body>
			<mdb-card-title>Card with waves effect</mdb-card-title>
			<mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
			<mdb-btn color="primary">Button</mdb-btn>
		</mdb-card-body>
	</mdb-container>
</template>

<script>
	import {mdbContainer, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask} from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
            mdbContainer,
            mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn,
			mdbView,
			mdbMask
		}
	}
</script>