// import { validateLanguage } from "../config/Languages.config.js";

// export const validateExecuteRequest = (req, res, next) => {
//   console.log("Inside validateExecuteRequest");
//     const { language, code, input, slug } = req.body;

//     if (!language || typeof language !== 'string' || !validateLanguage(language)) {
//       return res.status(400).json({
//         success: false,
//         error: 'Language is required and must be a valid string'
//       });
//     }

//     if (!code || typeof code !== 'string') {
//       return res.status(400).json({
//         success: false,
//         error: 'Code is required and must be a string'
//       });
//     }

//     if (input && typeof input !== 'string') {
//       return res.status(400).json({
//         success: false,
//         error: 'Input must be a string'
//       });
//     }

//     // if (!slug || typeof slug !== 'string') {
//     //   return res.status(400).json({
//     //     success: false,
//     //     error: 'Slug is required and must be a string'
//     //   });
//     // }

//     next();
//   };
