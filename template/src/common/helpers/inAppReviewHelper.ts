import InAppReview from "react-native-in-app-review";

export function showInAppReview(successAction?: () => void, failAction?: () => void, onReviewNotAvailable?: () => void) {
  if (InAppReview.isAvailable()) {
    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        // for Android:
        // The flow has finished. The API does not indicate whether the user
        // reviewed or not, or even whether the review dialog was shown. Thus, no
        // matter the result, we continue our app flow.

        // for iOS
        // the flow launched successfully, The API does not indicate whether the user
        // reviewed or not, or he/she closed flow yet as Android, Thus, no
        // matter the result, we continue our app flow.
        if (hasFlowFinishedSuccessfully) {
          successAction?.();
        }
      })
      .catch((error) => {
        failAction?.();
      });
  } else {
    console.error("Review is not available for this device/account");
    onReviewNotAvailable?.();
  }
}
