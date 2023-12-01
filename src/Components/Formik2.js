import React from 'react';
import { Formik, useFormik } from 'formik';

const Formik2 = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    }
  });

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Login Form</h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <Formik initialValues={formik.initialValues} onSubmit={formik.onSubmit}>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="lg:col-span-2">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label htmlFor="full_name">Username</label>
                          <input
                            type="text"
                            name="username"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                          />
                        </div>

                        <div className="md:col-span-5">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor="address">Address / Street</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            placeholder=""
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="country">Country / region</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              name="country"
                              id="country"
                              placeholder="Country"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              value={formik.values.country}
                              onChange={formik.handleChange}
                            />
                            <button
                              tabIndex="-1"
                              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                            >
                              {/* ... */}
                            </button>
                            {/* ... */}
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="state">State / province</label>
                          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              name="state"
                              id="state"
                              placeholder="State"
                              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              value={formik.values.state}
                              onChange={formik.handleChange}
                            />
                            <button
                              tabIndex="-1"
                              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                            >
                              {/* ... */}
                            </button>
                            {/* ... */}
                          </div>
                        </div>

                        <div className="md:col-span-1">
                          <label htmlFor="zipcode">Zipcode</label>
                          <input
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                            value={formik.values.zipcode}
                            onChange={formik.handleChange}
                          />
                        </div>

                        <div className="md:col-span-5"></div>
                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Formik>
              </div>
            </div>
          </div>

          <a
            href="https://www.buymeacoffee.com/dgauderman"
            target="_blank"
            className="md:absolute bottom-0 right-0 p-4 float-right"
          >
            <img
              src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
              alt="Buy Me A Coffee"
              className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Formik2;
