import CustomerDetails from '../models/customerdetail.model';

//add customer details
export const addDetails = async (body) => {
    let updateCustomerDetails = {
        name: body.name,
        phoneNumber: body.phoneNumber,
        addressType: body.addressType,
        fullAddress: body.fullAddress,
        city: body.city,
        landmark: body.landmark,
        state: body.state,
        pinCode: body.pinCode,
        locality: body.locality
    };
    const findCustomer = await CustomerDetails.findOne({ userId: body.userId });
    if (findCustomer != null) {
        const addCustomerDetails = await CustomerDetails.findOneAndUpdate(
            {
                _id: findCustomer._id
            },
            { $push: { customer: updateCustomerDetails } },
            {
                new: true
            }
        );
        return addCustomerDetails;
    }
    else {
        const createNewCustomer = await CustomerDetails.create({ userId: body.userId, customer: [updateCustomerDetails] });
        return createNewCustomer;
    }
};