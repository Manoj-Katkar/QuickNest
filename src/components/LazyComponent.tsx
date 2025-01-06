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
  }),
  [],
);

export {screens};

// put it in helpers
