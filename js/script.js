function billingFunction(){
		if (document.getElementById('same').checked){

var shipname=document.getElementById('shippingName').value; /*Get Shipping Name*/
var zipcode=document.getElementById('shippingZip').value; /*Get Zip Code*/
  
      document.getElementById('billingName').value=shipname; /*Copy Shipping Name to Billing Name*/
      document.getElementById('billingZip').value=zipcode; /*Copy Shipping Zip to Billing Zip*/

        document.getElementById('billingName').readOnly = true; /*Set field to read only*/
        document.getElementById('billingZip').readOnly = true; /*Set field to read only*/
           document.getElementById('billingName').style.color="#888"; /*Set color of fild text to light grey*/
           document.getElementById('billingZip').style.color="#888"; /*Set color of fild text to light grey*/

		}
		else{ 
			document.getElementById('billingName').value=''; /*Clear field*/
			document.getElementById('billingZip').value=''; /*Clear field*/

			     document.getElementById('billingName').readOnly = false; /*Unset field to read only*/
                 document.getElementById('billingZip').readOnly = false; /*Unset field to read only*/
                     document.getElementById('billingName').style.color=''; /*Clear changed color to default*/
                     document.getElementById('billingZip').style.color=''; /*Clear changed color to default*/
		}
	}