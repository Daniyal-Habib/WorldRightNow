import { Divider } from "@mui/material";
import Line from "../../assets/line.png";

const Footer = () => {
  return (
    <div className="footerhome">
      <div className="footercontent">
        <svg
          className="logoHeader"
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
          }}
          width="186"
          height="22"
          viewBox="0 0 186 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_646_168)">
            <path
              d="M42.895 3.6403C42.895 3.4064 42.9879 3.18208 43.1533 3.01669C43.3187 2.85129 43.543 2.75838 43.7769 2.75838H46.8152C47.0491 2.75838 47.2734 2.85129 47.4388 3.01669C47.6042 3.18208 47.6971 3.4064 47.6971 3.6403V18.8536C47.6971 19.0875 47.6042 19.3118 47.4388 19.4772C47.2734 19.6426 47.0491 19.7355 46.8152 19.7355H43.7769C43.543 19.7355 43.3187 19.6426 43.1533 19.4772C42.9879 19.3118 42.895 19.0875 42.895 18.8536V3.6403ZM36.3467 18.8536C36.3467 19.0875 36.2538 19.3118 36.0884 19.4772C35.923 19.6426 35.6987 19.7355 35.4648 19.7355H32.4265C32.1926 19.7355 31.9683 19.6426 31.8029 19.4772C31.6375 19.3118 31.5446 19.0875 31.5446 18.8536V3.6403C31.5446 3.4064 31.6375 3.18208 31.8029 3.01669C31.9683 2.85129 32.1926 2.75838 32.4265 2.75838H35.4648C35.6987 2.75838 35.923 2.85129 36.0884 3.01669C36.2538 3.18208 36.3467 3.4064 36.3467 3.6403V18.8536ZM43.2345 13.1144H36.0071V9.13692H43.2345V13.1144Z"
              fill="url(#paint0_linear_646_168)"
            />
            <path
              d="M56.396 19.9538C55.3288 19.9538 54.3667 19.7434 53.5099 19.3232C52.6689 18.903 52.0062 18.2481 51.5211 17.3587C51.0519 16.4534 50.8178 15.3135 50.8178 13.939V7.47229C50.8178 7.23839 50.9107 7.01407 51.0761 6.84867C51.2415 6.68328 51.4658 6.59036 51.6997 6.59036H54.5439C54.7778 6.59036 55.0021 6.68328 55.1675 6.84867C55.3329 7.01407 55.4259 7.23839 55.4259 7.47229V13.1872C55.4259 14.2058 55.6115 14.9334 55.9837 15.37C56.3717 15.8065 56.9132 16.0248 57.6086 16.0248C58.0611 16.0248 58.4734 15.9198 58.8455 15.7095C59.2177 15.4992 59.5162 15.168 59.7429 14.7151C59.9691 14.2464 60.0824 13.648 60.0824 12.9204V7.47229C60.0824 7.23839 60.1753 7.01407 60.3407 6.84867C60.5061 6.68328 60.7305 6.59036 60.9644 6.59036H63.8086C64.0425 6.59036 64.2668 6.68328 64.4322 6.84867C64.5976 7.01407 64.6905 7.23839 64.6905 7.47229V18.8536C64.6905 19.0875 64.5976 19.3118 64.4322 19.4772C64.2668 19.6426 64.0425 19.7355 63.8086 19.7355H61.1826C60.9487 19.7355 60.7244 19.6426 60.559 19.4772C60.3936 19.3118 60.3007 19.0875 60.3007 18.8536V17.1245C60.3016 17.0442 60.327 16.9661 60.3737 16.9007C60.4203 16.8353 60.4859 16.7858 60.5616 16.7589C60.6373 16.732 60.7194 16.7289 60.7968 16.7502C60.8743 16.7714 60.9434 16.8159 60.9948 16.8776C61.0891 16.994 61.1103 17.1545 61.0411 17.2877C60.5944 18.1485 59.9757 18.8029 59.1851 19.2504C58.3278 19.7192 57.3983 19.9538 56.396 19.9538Z"
              fill="url(#paint1_linear_646_168)"
            />
            <path
              d="M75.9289 19.9538C74.7484 19.9538 73.762 19.7112 72.97 19.2262C72.1939 18.7411 71.6119 17.9972 71.2238 16.9949C70.8358 15.9926 70.6418 14.7072 70.6418 13.1387C70.6418 11.6028 70.8437 10.3333 71.2481 9.33095C71.6683 8.32864 72.2746 7.58474 73.0671 7.09968C73.8595 6.61462 74.8133 6.37209 75.9289 6.37209C77.1252 6.37209 78.2087 6.64681 79.1788 7.19669C80.1648 7.74657 80.9409 8.5306 81.5071 9.54923C82.0892 10.5515 82.3802 11.7483 82.3802 13.1387C82.3802 14.5454 82.0892 15.758 81.5071 16.7766C80.9409 17.7789 80.1648 18.5634 79.1788 19.1292C78.2087 19.6791 77.1252 19.9538 75.9289 19.9538ZM68.5406 19.7355C68.3067 19.7355 68.0823 19.6426 67.9169 19.4772C67.7515 19.3118 67.6586 19.0875 67.6586 18.8536V2.62169C67.6586 2.38779 67.7515 2.16347 67.9169 1.99807C68.0823 1.83268 68.3067 1.73976 68.5406 1.73976H71.3848C71.6187 1.73976 71.843 1.83268 72.0084 1.99807C72.1738 2.16347 72.2667 2.38779 72.2667 2.62169V8.79739L72.0242 13.1387L72.0484 17.48V18.8536C72.0484 19.0875 71.9555 19.3118 71.7901 19.4772C71.6247 19.6426 71.4004 19.7355 71.1665 19.7355H68.5406ZM74.9588 16.2916C75.476 16.2916 75.9368 16.1703 76.3412 15.9278C76.7614 15.6852 77.0931 15.3294 77.3356 14.8606C77.594 14.3756 77.7236 13.8014 77.7236 13.1387C77.7236 12.4759 77.594 11.9181 77.3356 11.4652C77.0931 10.9965 76.7614 10.6406 76.3412 10.3981C75.9368 10.1556 75.476 10.0343 74.9588 10.0343C74.4415 10.0343 73.9724 10.1556 73.5521 10.3981C73.1478 10.6406 72.8161 10.9965 72.5577 11.4652C72.3152 11.9181 72.1939 12.4759 72.1939 13.1387C72.1939 13.8014 72.3152 14.3756 72.5577 14.8606C72.8161 15.3294 73.1478 15.6852 73.5521 15.9278C73.9724 16.1703 74.4411 16.2916 74.9588 16.2916Z"
              fill="url(#paint2_linear_646_168)"
            />
            <path
              d="M92.7923 19.9538C91.6118 19.9538 90.6254 19.7112 89.8334 19.2262C89.0573 18.7411 88.4752 17.9972 88.0872 16.9949C87.6991 15.9926 87.5051 14.7072 87.5051 13.1387C87.5051 11.6028 87.7071 10.3333 88.1114 9.33095C88.5317 8.32864 89.138 7.58474 89.9304 7.09968C90.7228 6.61462 91.6766 6.37209 92.7923 6.37209C93.9886 6.37209 95.072 6.64681 96.0422 7.19669C97.0281 7.74657 97.8042 8.5306 98.3704 9.54923C98.9525 10.5515 99.2435 11.7483 99.2435 13.1387C99.2435 14.5454 98.9525 15.758 98.3704 16.7766C97.8042 17.7789 97.0281 18.5634 96.0422 19.1292C95.072 19.6791 93.9886 19.9538 92.7923 19.9538ZM85.4039 19.7355C85.17 19.7355 84.9457 19.6426 84.7803 19.4772C84.6149 19.3118 84.522 19.0875 84.522 18.8536V2.62169C84.522 2.38779 84.6149 2.16347 84.7803 1.99807C84.9457 1.83268 85.17 1.73976 85.4039 1.73976H88.2481C88.482 1.73976 88.7063 1.83268 88.8717 1.99807C89.0371 2.16347 89.13 2.38779 89.13 2.62169V8.79739L88.8875 13.1387L88.9118 17.48V18.8536C88.9118 19.0875 88.8189 19.3118 88.6535 19.4772C88.4881 19.6426 88.2637 19.7355 88.0298 19.7355H85.4039ZM91.8221 16.2916C92.3394 16.2916 92.8002 16.1703 93.2046 15.9278C93.6248 15.6852 93.9564 15.3294 94.1989 14.8606C94.4573 14.3756 94.587 13.8014 94.587 13.1387C94.587 12.4759 94.4573 11.9181 94.1989 11.4652C93.9564 10.9965 93.6248 10.6406 93.2046 10.3981C92.8002 10.1556 92.3394 10.0343 91.8221 10.0343C91.3049 10.0343 90.8357 10.1556 90.4155 10.3981C90.0111 10.6406 89.6795 10.9965 89.4211 11.4652C89.1786 11.9181 89.0573 12.4759 89.0573 13.1387C89.0573 13.8014 89.1786 14.3756 89.4211 14.8606C89.6795 15.3294 90.0111 15.6852 90.4155 15.9278C90.8357 16.1703 91.3044 16.2916 91.8221 16.2916Z"
              fill="url(#paint3_linear_646_168)"
            />
            <path
              d="M102.267 19.7355C102.033 19.7355 101.809 19.6426 101.644 19.4772C101.478 19.3118 101.385 19.0875 101.385 18.8536V2.62169C101.385 2.38779 101.478 2.16347 101.644 1.99807C101.809 1.83268 102.033 1.73976 102.267 1.73976H105.111C105.345 1.73976 105.57 1.83268 105.735 1.99807C105.9 2.16347 105.993 2.38779 105.993 2.62169V18.8536C105.993 19.0875 105.9 19.3118 105.735 19.4772C105.57 19.6426 105.345 19.7355 105.111 19.7355H102.267Z"
              fill="url(#paint4_linear_646_168)"
            />
            <path
              d="M115.876 19.9538C114.324 19.9538 112.965 19.6627 111.801 19.0807C110.654 18.4823 109.756 17.674 109.109 16.6554C108.479 15.6204 108.163 14.4483 108.163 13.1387C108.163 11.829 108.471 10.6649 109.085 9.64624C109.716 8.6113 110.581 7.81095 111.68 7.24519C112.779 6.66312 114.016 6.37209 115.391 6.37209C116.684 6.37209 117.865 6.63887 118.932 7.17243C119.999 7.68969 120.848 8.45784 121.478 9.47647C122.109 10.4951 122.424 11.732 122.424 13.1872L122.4 13.745C122.375 14.0748 122.098 14.3271 121.768 14.3271H112.829C112.595 14.3271 112.371 14.2342 112.205 14.0688C112.04 13.9034 111.947 13.679 111.947 13.4451V12.7837C111.947 12.5498 112.04 12.3255 112.205 12.1601C112.371 11.9947 112.595 11.9018 112.829 11.9018H118.441C118.744 11.9018 118.823 12.3216 118.54 12.4314C118.358 12.5024 118.161 12.3639 118.145 12.1686C118.111 11.7417 118.001 11.3616 117.816 11.0287C117.599 10.6018 117.262 10.2477 116.846 10.01C116.442 9.76751 115.965 9.64624 115.415 9.64624C114.865 9.64624 114.38 9.76751 113.96 10.01C113.555 10.2526 113.24 10.6 113.014 11.0529C112.788 11.4895 112.674 12.0067 112.674 12.6051V13.3084C112.674 13.9553 112.804 14.5132 113.062 14.9819C113.337 15.4506 113.725 15.8144 114.227 16.0733C114.728 16.3158 115.326 16.4371 116.021 16.4371C116.668 16.4371 117.218 16.348 117.671 16.1703C117.92 16.0664 118.159 15.9408 118.386 15.795C118.78 15.5437 119.307 15.5604 119.63 15.8978L120.908 17.226C121.229 17.5602 121.241 18.0925 120.885 18.3901C120.379 18.8143 119.801 19.1574 119.15 19.4202C118.228 19.7761 117.137 19.9538 115.876 19.9538Z"
              fill="url(#paint5_linear_646_168)"
            />
            <path
              d="M129.23 11.086C129.23 10.8521 129.322 10.6278 129.488 10.4624C129.653 10.297 129.878 10.2041 130.111 10.2041H136.181C136.415 10.2041 136.64 10.297 136.805 10.4624C136.97 10.6278 137.063 10.8521 137.063 11.086V13.0328C137.063 13.2667 136.97 13.4911 136.805 13.6565C136.64 13.8218 136.415 13.9148 136.181 13.9148H130.111C129.878 13.9148 129.653 13.8218 129.488 13.6565C129.322 13.4911 129.23 13.2667 129.23 13.0328V11.086ZM129.569 18.8536C129.569 19.0875 129.476 19.3118 129.311 19.4772C129.145 19.6426 128.921 19.7355 128.687 19.7355H125.649C125.415 19.7355 125.191 19.6426 125.025 19.4772C124.86 19.3118 124.767 19.0875 124.767 18.8536V3.6403C124.767 3.4064 124.86 3.18208 125.025 3.01669C125.191 2.85129 125.415 2.75838 125.649 2.75838H137.2C137.434 2.75838 137.658 2.85129 137.824 3.01669C137.989 3.18208 138.082 3.4064 138.082 3.6403V5.58716C138.082 5.82106 137.989 6.04538 137.824 6.21078C137.658 6.37617 137.434 6.46909 137.2 6.46909H130.451C130.217 6.46909 129.993 6.56201 129.827 6.7274C129.662 6.89279 129.569 7.11711 129.569 7.35102V18.8536Z"
              fill="url(#paint6_linear_646_168)"
            />
            <path
              d="M146.713 19.9538C145.161 19.9538 143.803 19.6627 142.639 19.0807C141.491 18.4823 140.593 17.674 139.947 16.6554C139.316 15.6204 139.001 14.4483 139.001 13.1387C139.001 11.829 139.308 10.6649 139.922 9.64624C140.553 8.6113 141.418 7.81095 142.518 7.24519C143.617 6.66312 144.854 6.37209 146.228 6.37209C147.522 6.37209 148.702 6.63887 149.769 7.17243C150.836 7.68969 151.685 8.45784 152.316 9.47647C152.946 10.4951 153.262 11.732 153.262 13.1872L153.237 13.745C153.212 14.0748 152.935 14.3271 152.605 14.3271H143.666C143.432 14.3271 143.208 14.2342 143.043 14.0688C142.877 13.9034 142.784 13.679 142.784 13.4451V12.7837C142.784 12.5498 142.877 12.3255 143.043 12.1601C143.208 11.9947 143.432 11.9018 143.666 11.9018H149.278C149.581 11.9018 149.66 12.3216 149.378 12.4314C149.195 12.5024 148.998 12.3639 148.983 12.1686C148.948 11.7417 148.838 11.3616 148.654 11.0287C148.427 10.5921 148.104 10.2526 147.683 10.01C147.279 9.76751 146.802 9.64624 146.253 9.64624C145.703 9.64624 145.218 9.76751 144.797 10.01C144.393 10.2526 144.078 10.6 143.851 11.0529C143.625 11.4895 143.512 12.0067 143.512 12.6051V13.3084C143.512 13.9553 143.641 14.5132 143.9 14.9819C144.175 15.4506 144.563 15.8144 145.064 16.0733C145.565 16.3158 146.163 16.4371 146.859 16.4371C147.505 16.4371 148.055 16.348 148.508 16.1703C148.757 16.0663 148.996 15.9407 149.223 15.795C149.618 15.5437 150.144 15.5604 150.468 15.8978L151.745 17.226C152.066 17.5602 152.078 18.0925 151.723 18.3901C151.217 18.8143 150.638 19.1574 149.987 19.4202C149.066 19.7761 147.974 19.9538 146.713 19.9538Z"
              fill="url(#paint7_linear_646_168)"
            />
            <path
              d="M162.274 19.9538C160.722 19.9538 159.364 19.6627 158.2 19.0807C157.052 18.4823 156.154 17.674 155.507 16.6554C154.877 15.6204 154.562 14.4483 154.562 13.1387C154.562 11.829 154.869 10.6649 155.483 9.64624C156.114 8.6113 156.979 7.81095 158.078 7.24519C159.178 6.66312 160.415 6.37209 161.789 6.37209C163.082 6.37209 164.263 6.63887 165.33 7.17243C166.397 7.68969 167.246 8.45784 167.876 9.47647C168.507 10.4951 168.822 11.732 168.822 13.1872L168.798 13.745C168.773 14.0748 168.496 14.3271 168.165 14.3271H159.227C158.993 14.3271 158.769 14.2342 158.603 14.0688C158.438 13.9034 158.345 13.679 158.345 13.4451V12.7837C158.345 12.5498 158.438 12.3255 158.603 12.1601C158.769 11.9947 158.993 11.9018 159.227 11.9018H164.839C165.142 11.9018 165.221 12.3216 164.938 12.4314C164.756 12.5024 164.559 12.3639 164.543 12.1686C164.509 11.7417 164.399 11.3616 164.214 11.0287C163.997 10.6018 163.66 10.2477 163.244 10.01C162.84 9.76751 162.363 9.64624 161.813 9.64624C161.263 9.64624 160.778 9.76751 160.358 10.01C159.954 10.2526 159.638 10.6 159.412 11.0529C159.186 11.4895 159.073 12.0067 159.073 12.6051V13.3084C159.073 13.9553 159.202 14.5132 159.461 14.9819C159.735 15.4506 160.123 15.8144 160.625 16.0733C161.126 16.3158 161.724 16.4371 162.42 16.4371C163.066 16.4371 163.616 16.348 164.069 16.1703C164.31 16.0706 164.548 15.9454 164.784 15.795C165.178 15.5437 165.704 15.5604 166.028 15.8978L167.305 17.226C167.627 17.5602 167.639 18.0925 167.283 18.3901C166.778 18.8143 166.199 19.1574 165.548 19.4202C164.627 19.7761 163.535 19.9538 162.274 19.9538Z"
              fill="url(#paint8_linear_646_168)"
            />
            <path
              d="M176.671 19.9538C175.474 19.9538 174.383 19.6791 173.396 19.1292C172.426 18.5634 171.65 17.7789 171.068 16.7766C170.486 15.758 170.195 14.5454 170.195 13.1387C170.195 11.7483 170.486 10.5515 171.068 9.54923C171.65 8.5306 172.426 7.74657 173.396 7.19669C174.383 6.64681 175.474 6.37209 176.671 6.37209C177.803 6.37209 178.756 6.61462 179.533 7.09968C180.325 7.58474 180.923 8.32864 181.327 9.33095C181.732 10.3333 181.934 11.6028 181.934 13.1387C181.934 14.7072 181.74 15.9926 181.351 16.9949C180.963 17.9972 180.381 18.7411 179.605 19.2262C178.829 19.7112 177.851 19.9538 176.671 19.9538ZM177.641 16.2916C178.158 16.2916 178.619 16.1703 179.023 15.9278C179.443 15.6852 179.775 15.3294 180.018 14.8606C180.26 14.3756 180.381 13.8014 180.381 13.1387C180.381 12.4759 180.26 11.9181 180.018 11.4652C179.775 10.9965 179.443 10.6406 179.023 10.3981C178.619 10.1556 178.158 10.0343 177.641 10.0343C177.107 10.0343 176.63 10.1556 176.21 10.3981C175.805 10.6406 175.482 10.9965 175.24 11.4652C174.997 11.9181 174.876 12.4759 174.876 13.1387C174.876 13.8014 174.997 14.3756 175.24 14.8606C175.482 15.3294 175.805 15.6852 176.21 15.9278C176.63 16.1703 177.107 16.2916 177.641 16.2916ZM181.409 19.7355C181.175 19.7355 180.951 19.6426 180.785 19.4772C180.62 19.3118 180.527 19.0875 180.527 18.8536V17.48L180.551 13.1387L180.309 8.79739V2.62169C180.309 2.38779 180.402 2.16347 180.567 1.99807C180.732 1.83268 180.957 1.73976 181.191 1.73976H184.035C184.269 1.73976 184.493 1.83268 184.658 1.99807C184.824 2.16347 184.917 2.38779 184.917 2.62169V18.8536C184.917 19.0875 184.824 19.3118 184.658 19.4772C184.493 19.6426 184.269 19.7355 184.035 19.7355H181.409Z"
              fill="url(#paint9_linear_646_168)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.64578 -0.465057C1.94408 -0.465057 1.27111 -0.186306 0.774932 0.309875C0.278751 0.806055 0 1.47902 0 2.18073L0 19.8193C0 20.521 0.278751 21.194 0.774932 21.6901C1.27111 22.1863 1.94408 22.4651 2.64578 22.4651H20.2843C20.986 22.4651 21.659 22.1863 22.1552 21.6901C22.6514 21.194 22.9301 20.521 22.9301 19.8193V2.18073C22.9301 1.47902 22.6514 0.806055 22.1552 0.309875C21.659 -0.186306 20.986 -0.465057 20.2843 -0.465057L2.64578 -0.465057ZM13.5707 8.03717L18.147 3.4604C18.1824 3.424 18.2049 3.37707 18.2113 3.3267C18.2176 3.27633 18.2074 3.22526 18.1821 3.18122C18.1569 3.13718 18.118 3.10257 18.0713 3.08261C18.0246 3.06265 17.9727 3.05843 17.9234 3.07059L7.1833 5.87865C7.05342 5.91262 6.93927 5.99044 6.86019 6.09893C6.78112 6.20742 6.74197 6.3399 6.74939 6.47395L6.91123 9.39666C6.91912 9.53959 6.9794 9.6746 7.08056 9.77589L12.3254 15.0207C12.4267 15.1219 12.5617 15.1821 12.7046 15.19L15.6273 15.3519C15.7613 15.3592 15.8937 15.32 16.0021 15.2409C16.1105 15.1619 16.1882 15.0478 16.2222 14.918L19.0298 4.17741C19.0419 4.12817 19.0378 4.07631 19.0179 4.02967C18.9979 3.98302 18.9634 3.94411 18.9194 3.91882C18.8755 3.89353 18.8245 3.88323 18.7742 3.88946C18.7238 3.8957 18.6769 3.91814 18.6404 3.9534L18.64 3.95384L14.0632 8.53061C14.0178 8.57602 13.9442 8.57602 13.8987 8.53061L13.5698 8.20165C13.5244 8.15623 13.5244 8.08259 13.5698 8.03717H13.5707ZM10.5783 11.0295C10.5329 11.075 10.5329 11.1486 10.5783 11.194L10.9072 11.523C10.9527 11.5684 11.0263 11.5684 11.0717 11.523L13.3753 9.21939C13.4207 9.17397 13.4207 9.10033 13.3753 9.05491L13.0464 8.72595C13.0009 8.68053 12.9273 8.68053 12.8819 8.72595L10.5783 11.0295ZM12.3236 10.63C12.3099 10.6164 12.3099 10.5943 12.3236 10.5806L12.3893 10.5149C12.403 10.5013 12.425 10.5013 12.4387 10.5149L12.8007 10.877C12.8144 10.8906 12.8144 10.9127 12.8007 10.9264L12.735 10.9921C12.7214 11.0057 12.6993 11.0057 12.6856 10.9921L12.3236 10.63ZM13.6941 10.2795C13.6849 10.2887 13.6849 10.3033 13.6941 10.3125L13.9662 10.5846C13.9755 10.5939 13.99 10.5939 13.9993 10.5846L14.2714 10.3125C14.2806 10.3033 14.2806 10.2887 14.2714 10.2795L13.9993 10.0074C13.99 9.99813 13.9755 9.99813 13.9662 10.0074L13.6941 10.2795ZM14.1638 10.7817C14.1545 10.7725 14.1545 10.7579 14.1638 10.7487L14.4358 10.4766C14.4451 10.4673 14.4596 10.4673 14.4689 10.4766L14.741 10.7487C14.7502 10.7579 14.7502 10.7725 14.741 10.7817L14.4689 11.0538C14.4596 11.0631 14.4451 11.0631 14.4358 11.0538L14.1638 10.7817ZM13.2249 10.7487C13.2157 10.7579 13.2157 10.7725 13.2249 10.7817L13.497 11.0538C13.5063 11.0631 13.5208 11.0631 13.5301 11.0538L13.8022 10.7817C13.8114 10.7725 13.8114 10.7579 13.8022 10.7487L13.5301 10.4766C13.5208 10.4673 13.5063 10.4673 13.497 10.4766L13.2249 10.7487ZM13.6946 11.2509C13.6853 11.2417 13.6853 11.2271 13.6946 11.2178L13.9666 10.9458C13.9759 10.9365 13.9905 10.9365 13.9997 10.9458L14.2718 11.2178C14.2811 11.2271 14.2811 11.2417 14.2718 11.2509L13.9997 11.523C13.9905 11.5322 13.9759 11.5322 13.9666 11.523L13.6946 11.2509ZM12.7558 11.2178C12.7465 11.2271 12.7465 11.2417 12.7558 11.2509L13.0278 11.523C13.0371 11.5322 13.0516 11.5322 13.0609 11.523L13.333 11.2509C13.3422 11.2417 13.3422 11.2271 13.333 11.2178L13.0609 10.9458C13.0516 10.9365 13.0371 10.9365 13.0278 10.9458L12.7558 11.2178ZM13.2254 11.7201C13.2161 11.7108 13.2161 11.6963 13.2254 11.687L13.4975 11.415C13.5067 11.4057 13.5213 11.4057 13.5305 11.415L13.8026 11.687C13.8119 11.6963 13.8119 11.7108 13.8026 11.7201L13.5305 11.9922C13.5213 12.0014 13.5067 12.0014 13.4975 11.9922L13.2254 11.7201ZM12.2866 11.687C12.2773 11.6963 12.2773 11.7108 12.2866 11.7201L12.5587 11.9922C12.5679 12.0014 12.5825 12.0014 12.5917 11.9922L12.8638 11.7201C12.8731 11.7108 12.8731 11.6963 12.8638 11.687L12.5917 11.415C12.5825 11.4057 12.5679 11.4057 12.5587 11.415L12.2866 11.687ZM12.7562 12.1893C12.7469 12.18 12.7469 12.1655 12.7562 12.1562L13.0283 11.8841C13.0375 11.8749 13.0521 11.8749 13.0614 11.8841L13.3334 12.1562C13.3427 12.1655 13.3427 12.18 13.3334 12.1893L13.0614 12.4614C13.0521 12.4706 13.0375 12.4706 13.0283 12.4614L12.7562 12.1893ZM11.8174 12.1562C11.8081 12.1655 11.8081 12.18 11.8174 12.1893L12.0895 12.4614C12.0987 12.4706 12.1133 12.4706 12.1225 12.4614L12.3946 12.1893C12.4039 12.18 12.4039 12.1655 12.3946 12.1562L12.1225 11.8841C12.1133 11.8749 12.0987 11.8749 12.0895 11.8841L11.8174 12.1562ZM12.287 12.6585C12.2778 12.6492 12.2778 12.6347 12.287 12.6254L12.5591 12.3533C12.5684 12.3441 12.5829 12.3441 12.5922 12.3533L12.8642 12.6254C12.8735 12.6347 12.8735 12.6492 12.8642 12.6585L12.5922 12.9305C12.5829 12.9398 12.5684 12.9398 12.5591 12.9305L12.287 12.6585ZM11.5361 9.79044C11.5224 9.80411 11.5003 9.80411 11.4867 9.79044L11.1246 9.42841C11.111 9.41474 11.111 9.39269 11.1246 9.37902L11.1903 9.31332C11.204 9.29965 11.2261 9.29965 11.2397 9.31332L11.6018 9.67535C11.6154 9.68902 11.6154 9.71107 11.6018 9.72474L11.5361 9.79044ZM11.8042 8.41992C11.8134 8.42918 11.828 8.42918 11.8372 8.41992L12.1093 8.14785C12.1186 8.13859 12.1186 8.12404 12.1093 8.11478L11.8372 7.8427C11.828 7.83344 11.8134 7.83344 11.8042 7.8427L11.5321 8.11478C11.5228 8.12404 11.5228 8.13859 11.5321 8.14785L11.8042 8.41992ZM11.3676 7.9503C11.3583 7.95956 11.3438 7.95956 11.3345 7.9503L11.0625 7.67822C11.0532 7.66896 11.0532 7.65441 11.0625 7.64515L11.3345 7.37308C11.3438 7.36381 11.3583 7.36381 11.3676 7.37308L11.6397 7.64515C11.6489 7.65441 11.6489 7.66896 11.6397 7.67822L11.3676 7.9503ZM11.3345 8.88911C11.3438 8.89837 11.3583 8.89837 11.3676 8.88911L11.6397 8.61703C11.6489 8.60777 11.6489 8.59322 11.6397 8.58396L11.3676 8.31189C11.3583 8.30263 11.3438 8.30263 11.3345 8.31189L11.0625 8.58396C11.0532 8.59322 11.0532 8.60777 11.0625 8.61703L11.3345 8.88911ZM10.898 8.41948C10.8887 8.42874 10.8742 8.42874 10.8649 8.41948L10.5928 8.14741C10.5836 8.13815 10.5836 8.1236 10.5928 8.11434L10.8649 7.84226C10.8742 7.833 10.8887 7.833 10.898 7.84226L11.1701 8.11434C11.1793 8.1236 11.1793 8.13815 11.1701 8.14741L10.898 8.41948ZM10.8649 9.35829C10.8742 9.36756 10.8887 9.36756 10.898 9.35829L11.1701 9.08622C11.1793 9.07696 11.1793 9.06241 11.1701 9.05315L10.898 8.78107C10.8887 8.77181 10.8742 8.77181 10.8649 8.78107L10.5928 9.05315C10.5836 9.06241 10.5836 9.07696 10.5928 9.08622L10.8649 9.35829ZM10.4284 8.88867C10.4191 8.89793 10.4045 8.89793 10.3953 8.88867L10.1232 8.61659C10.1139 8.60733 10.1139 8.59278 10.1232 8.58352L10.3953 8.31145C10.4045 8.30219 10.4191 8.30219 10.4284 8.31145L10.7004 8.58352C10.7097 8.59278 10.7097 8.60733 10.7004 8.61659L10.4284 8.88867ZM10.3953 9.82748C10.4045 9.83674 10.4191 9.83674 10.4284 9.82748L10.7004 9.55541C10.7097 9.54615 10.7097 9.53159 10.7004 9.52233L10.4284 9.25026C10.4191 9.241 10.4045 9.241 10.3953 9.25026L10.1232 9.52233C10.1139 9.53159 10.1139 9.54615 10.1232 9.55541L10.3953 9.82748ZM9.95873 9.35785C9.94947 9.36711 9.93492 9.36711 9.92566 9.35785L9.65358 9.08578C9.64432 9.07652 9.64432 9.06197 9.65358 9.05271L9.92566 8.78063C9.93492 8.77137 9.94947 8.77137 9.95873 8.78063L10.2308 9.05271C10.2401 9.06197 10.2401 9.07652 10.2308 9.08578L9.95873 9.35785ZM9.92566 10.2967C9.93492 10.3059 9.94947 10.3059 9.95873 10.2967L10.2308 10.0246C10.2401 10.0153 10.2401 10.0008 10.2308 9.99152L9.95873 9.71944C9.94947 9.71018 9.93492 9.71018 9.92566 9.71944L9.65358 9.99152C9.64432 10.0008 9.64432 10.0153 9.65358 10.0246L9.92566 10.2967ZM9.4891 9.82704C9.47984 9.8363 9.46529 9.8363 9.45603 9.82704L9.18395 9.55496C9.17469 9.5457 9.17469 9.53115 9.18395 9.52189L9.45603 9.24982C9.46529 9.24056 9.47984 9.24056 9.4891 9.24982L9.76118 9.52189C9.77044 9.53115 9.77044 9.5457 9.76118 9.55496L9.4891 9.82704ZM5.59098 9.16603C5.48183 9.05698 5.33385 8.99572 5.17956 8.99572C5.02527 8.99572 4.87729 9.05698 4.76814 9.16603L3.69836 10.2358C3.58931 10.345 3.52805 10.4929 3.52805 10.6472C3.52805 10.8015 3.58931 10.9495 3.69836 11.0587L11.103 18.4655C11.2122 18.5746 11.3602 18.6358 11.5144 18.6358C11.6687 18.6358 11.8167 18.5746 11.9259 18.4655L12.9956 17.3957C13.1047 17.2866 13.166 17.1386 13.166 16.9843C13.166 16.83 13.1047 16.6821 12.9956 16.5729L5.59054 9.16868L5.59098 9.16603Z"
              fill="url(#paint10_linear_646_168)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_646_168"
              x1="17.7203"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_646_168"
              x1="17.7203"
              y1="-3.6356"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_646_168"
              x1="17.7204"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_646_168"
              x1="17.7203"
              y1="-3.63559"
              x2="196.752"
              y2="25.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_646_168"
              x1="-2.4253"
              y1="-3.11084"
              x2="24.0325"
              y2="23.5675"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FC2C7E" />
              <stop offset="1" stop-color="#A02CFC" />
            </linearGradient>
            <clipPath id="clip0_646_168">
              <rect width="186" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>{" "}
        <div className="div1footer">
          <a href="/">About us</a>
          <a href="/">Pricing</a>
          <a href="/all/blogs">Blogs</a>
          <a href="/">FAQ's</a>
          <a href="/contact">Contact us</a>
        </div>
      </div>
      <div className="div2footer">
        <div className="div3footer">
          <div className="companyname">
            <p>Copyright © 2023 Hubble Feed</p>
          </div>
          <div className="infofooter">
            <p>All Rights Reserved</p>
            <p className="separater">&nbsp;|&nbsp;</p>
            <a
              style={{
                color: "#FC2C7E",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              href="/"
            >
              Terms and Conditions
            </a>
            <p className="separater">&nbsp;|&nbsp;</p>

            <a
              style={{
                color: "#FC2C7E",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              href="/"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
