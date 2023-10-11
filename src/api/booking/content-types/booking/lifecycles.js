module.exports = {

    async afterCreate(event){

        const {result} = event;

        try {

            await strapi.plugin('email').service('email').send({
                to: 'yashrajshres@gmail.com',
                subject: 'Booking has been Confirmed!!',
                html: `<h1>Booking details are:<h1>
                <ul>
                    <li>Name: ${result.name}</li>
                    <li>Phone: ${result.phone}</li>
                    <li>Email: ${result.email}</li>
                    <li>Check In: ${result.check_in}</li>
                    <li>Check Out: ${result.check_out}</li>
                    <li>Adult: ${result.adult}</li>
                    <li>Children: ${result.children}</li>
                    <li>Description: ${result.description}</li>
                </ul>`               
            })
            
        } catch (error) {
            console.log(error);
        }       
    }
};