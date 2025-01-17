import React from 'react';
import {helpers} from '../utility/helpers';

const screens = React.useMemo(
  () => ({
    Onboarding: helpers.LazyLoad(
      () => import('../screen/onboarding/onboarding.screen'),
    ),
    Login: helpers.LazyLoad(() => import('../screen/login/login.screen')),
    Otp: helpers.LazyLoad(() => import('../screen/otp/otp.screen')),
    DrawerNav: helpers.LazyLoad(() => import('./drawer-nav')),
    HouseServices: helpers.LazyLoad(
      () => import('../screen/house-services/house-services.screen'),
    ),
    Details: helpers.LazyLoad(() => import('../screen/details/details.screen')),
    NotificationScreen: helpers.LazyLoad(
      () => import('../screen/notification/notification.screen'),
    ),
    BottomTab: helpers.LazyLoad(() => import('../components/bottom-tab')),
    Subscription: helpers.LazyLoad(
      () => import('../screen/subscription/subscription.screen'),
    ),
    Verification: helpers.LazyLoad(
      () => import('../screen/verification/verification.screen'),
    ),
    LegalDocuments: helpers.LazyLoad(
      () => import('../screen/legal-documents/legal-documents.screen'),
    ),
    TransactionHistory: helpers.LazyLoad(
      () => import('../screen/transaction-history/transaction-history.screen'),
    ),
    ContactUs: helpers.LazyLoad(
      () => import('../screen/contact-us/contact-us.screen'),
    ),
    AboutUs: helpers.LazyLoad(
      () => import('../screen/about-us/about-us.screen'),
    ),
    Setting: helpers.LazyLoad(() => import('../screen/setting/setting.screen')),
    DeleteAccount: helpers.LazyLoad(
      () => import('../screen/delete-account/delete-account.screen'),
    ),
    Logout: helpers.LazyLoad(() => import('../screen/logout/logout.screen')),
    Home: helpers.LazyLoad(() => import('../screen/home/home.screen')),
    Concern: helpers.LazyLoad(() => import('../screen/concern/concern.screen')),
    Member: helpers.LazyLoad(() => import('../screen/member/member.screen')),
    Enquiry: helpers.LazyLoad(() => import('../screen/enquiry/enquiry.screen')),
    HouseHoldMember: helpers.LazyLoad(
      () => import('../screen/household-member/household-member.screen'),
    ),
    PaymentSuccessful: helpers.LazyLoad(
      () => import('../screen/payment-successful/payment-successful.screen'),
    ),
    PaymentUnsuccessful: helpers.LazyLoad(
      () =>
        import('../screen/payment-unsuccessful/payment-unsuccessful.screen'),
    ),
    AddMember: helpers.LazyLoad(
      () => import('../screen/add-member/add-member.screen'),
    ),
    EditProfile: helpers.LazyLoad(
      () => import('../screen/edit-profile/edit-profile.screen'),
    ),
    PrivacyPolicy: helpers.LazyLoad(
      () => import('../screen/privacy-policy/privacy-policy.screen'),
    ),
    TermsConditions: helpers.LazyLoad(
      () => import('../screen/terms-conditions/terms-conditions.screen'),
    ),
    PanicPress: helpers.LazyLoad(
      () => import('../screen/panic-press/panic-press.screen'),
    ),
    PanicActive: helpers.LazyLoad(
      () => import('../screen/panic-active/panic-active.screen'),
    ),
    MapIntegration: helpers.LazyLoad(
      () => import('../screen/map-integration/map-integration.screen'),
    ),
    AccountApproval: helpers.LazyLoad(
      () => import('../screen/account-approval/account-approval.screen'),
    ),
    NothingHere: helpers.LazyLoad(
      () => import('../screen/nothing-here/nothing-here.screen'),
    ),
  }),
  [],
);

export {screens};

// put it in helpers
