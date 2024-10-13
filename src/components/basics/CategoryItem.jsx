export default function CategoryItem({children}) {
  return (
    <div className="lg:w-[364px] w-[339px] h-[72px] hover:border-b-[1px] cursor-pointer duration-200 transition-all border-[1px] rounded-[18px] lg:h-[134px] flex items-center pr-[2rem] bg-white border-[#FF7A00] border-b-8 justify-end gap-4">
      <h1 className="text-[24px] font-bold  leading-[26px] text-[#272727]">
       {children}
      </h1>
      <svg
        width="73"
        height="65"
        viewBox="0 0 73 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.2907 4.58887H2.7629C1.63179 4.58887 0.714844 5.50581 0.714844 6.63693V47.9507C0.714844 49.0818 1.63179 49.9988 2.7629 49.9988H56.2907C57.4218 49.9988 58.3388 49.0818 58.3388 47.9507V6.63693C58.3388 5.50581 57.4218 4.58887 56.2907 4.58887Z"
          fill="#020202"
        />
        <path
          d="M56.2922 50.5818H2.76046C1.30762 50.5818 0.125 49.3992 0.125 47.9464V6.62862C0.125 5.17579 1.30762 3.99316 2.76046 3.99316H56.2922C57.745 3.99316 58.9276 5.17579 58.9276 6.62862V47.9464C58.9276 49.3992 57.745 50.5818 56.2922 50.5818ZM2.76046 5.1758C1.95768 5.1758 1.2998 5.82977 1.2998 6.63646V47.9542C1.2998 48.757 1.95376 49.4148 2.76046 49.4148H56.2922C57.095 49.4148 57.7528 48.7609 57.7528 47.9542V6.63646C57.7528 5.83368 57.0989 5.1758 56.2922 5.1758H2.76046Z"
          fill="black"
        />
        <path
          d="M56.2907 0.672852H2.7629C1.63179 0.672852 0.714844 1.5898 0.714844 2.72091V44.0347C0.714844 45.1658 1.63179 46.0828 2.7629 46.0828H56.2907C57.4218 46.0828 58.3388 45.1658 58.3388 44.0347V2.72091C58.3388 1.5898 57.4218 0.672852 56.2907 0.672852Z"
          fill="white"
        />
        <path
          d="M56.2922 46.6658H2.76046C1.30762 46.6658 0.125 45.4832 0.125 44.0303V2.71261C0.125 1.25977 1.30762 0.0771484 2.76046 0.0771484H56.2922C57.745 0.0771484 58.9276 1.25977 58.9276 2.71261V44.0303C58.9276 45.4832 57.745 46.6658 56.2922 46.6658ZM2.76046 1.25979C1.95768 1.25979 1.2998 1.91375 1.2998 2.72045V44.0382C1.2998 44.841 1.95376 45.4988 2.76046 45.4988H56.2922C57.095 45.4988 57.7528 44.8449 57.7528 44.0382V2.72045C57.7528 1.91767 57.0989 1.25979 56.2922 1.25979H2.76046Z"
          fill="black"
        />
        <path
          d="M46.3516 15.0166H10.8413C9.65084 15.0166 8.6875 14.0532 8.6875 12.8628C8.6875 11.6723 9.65084 10.709 10.8413 10.709H46.3516C47.542 10.709 48.5054 11.6723 48.5054 12.8628C48.5054 14.0532 47.542 15.0166 46.3516 15.0166Z"
          fill="black"
        />
        <path
          d="M46.3516 31.9023H10.8413C9.65084 31.9023 8.6875 30.939 8.6875 29.7485C8.6875 28.5581 9.65084 27.5947 10.8413 27.5947H46.3516C47.542 27.5947 48.5054 28.5581 48.5054 29.7485C48.5054 30.939 47.542 31.9023 46.3516 31.9023Z"
          fill="black"
        />
        <path
          d="M51.0664 16.086L52.6289 17.3978C53.8429 18.416 55.3739 18.976 56.9599 18.976H59.0002C62.2701 18.976 65.07 21.3256 65.6378 24.5445L65.9902 26.5534C66.2644 28.112 67.0829 29.5257 68.2968 30.5438L69.8593 31.8557C72.3655 33.9586 72.9999 37.5535 71.363 40.3847L70.341 42.1509C69.5499 43.5215 69.264 45.1309 69.5421 46.6895L69.8945 48.6984C70.4623 51.9174 68.6375 55.0815 65.5635 56.2015L63.6446 56.8985C62.1565 57.4389 60.9073 58.4884 60.1123 59.8629L59.0903 61.629C57.4534 64.4603 54.023 65.7095 50.9489 64.5935L49.03 63.8964C47.5419 63.356 45.9091 63.356 44.421 63.8964L42.5021 64.5935C39.428 65.7135 35.9976 64.4642 34.3607 61.629L33.3387 59.8629C32.5476 58.4923 31.2945 57.4428 29.8064 56.8985L27.8875 56.2015C24.8135 55.0815 22.9887 51.9213 23.5565 48.6984L23.9089 46.6895C24.183 45.1309 23.9011 43.5215 23.11 42.1509L22.088 40.3847C20.4511 37.5535 21.0855 33.9547 23.5917 31.8557L25.1542 30.5438C26.3681 29.5257 27.1827 28.112 27.4608 26.5534L27.8132 24.5445C28.381 21.3256 31.177 18.976 34.4508 18.976H36.4911C38.0771 18.976 39.6081 18.416 40.8221 17.3978L42.3846 16.086C44.8908 13.9831 48.5406 13.9831 51.0468 16.086H51.0664Z"
          fill="black"
        />
        <path
          d="M51.0664 12.1699L52.6289 13.4818C53.8429 14.5 55.3739 15.06 56.9599 15.06H59.0002C62.2701 15.06 65.07 17.4095 65.6378 20.6285L65.9902 22.6374C66.2644 24.196 67.0829 25.6097 68.2968 26.6278L69.8593 27.9397C72.3655 30.0426 72.9999 33.6375 71.363 36.4687L70.341 38.2348C69.5499 39.6054 69.264 41.2149 69.5421 42.7735L69.8945 44.7824C70.4623 48.0014 68.6375 51.1655 65.5635 52.2855L63.6446 52.9825C62.1565 53.5229 60.9073 54.5724 60.1123 55.9469L59.0903 57.713C57.4534 60.5443 54.023 61.7935 50.9489 60.6774L49.03 59.9804C47.5419 59.44 45.9091 59.44 44.421 59.9804L42.5021 60.6774C39.428 61.7974 35.9976 60.5482 34.3607 57.713L33.3387 55.9469C32.5476 54.5763 31.2945 53.5268 29.8064 52.9825L27.8875 52.2855C24.8135 51.1655 22.9887 48.0053 23.5565 44.7824L23.9089 42.7735C24.183 41.2149 23.9011 39.6054 23.11 38.2348L22.088 36.4687C20.4511 33.6375 21.0855 30.0387 23.5917 27.9397L25.1542 26.6278C26.3681 25.6097 27.1827 24.196 27.4608 22.6374L27.8132 20.6285C28.381 17.4095 31.177 15.06 34.4508 15.06H36.4911C38.0771 15.06 39.6081 14.5 40.8221 13.4818L42.3846 12.1699C44.8908 10.0671 48.5406 10.0671 51.0468 12.1699H51.0664Z"
          fill="#FE6437"
        />
        <path
          d="M46.6679 53.573C56.1689 53.573 63.8709 45.8709 63.8709 36.37C63.8709 26.869 56.1689 19.167 46.6679 19.167C37.167 19.167 29.4648 26.869 29.4648 36.37C29.4648 45.8709 37.167 53.573 46.6679 53.573Z"
          fill="white"
        />
        <path
          d="M46.6694 54.1648C36.8598 54.1648 28.875 46.184 28.875 36.3744C28.875 26.5648 36.8559 18.584 46.6694 18.584C56.4829 18.584 64.4597 26.5648 64.4597 36.3744C64.4597 46.184 56.479 54.1648 46.6694 54.1648ZM46.6694 19.7549C37.5059 19.7549 30.0498 27.2109 30.0498 36.3705C30.0498 45.53 37.5059 52.986 46.6694 52.986C55.8328 52.986 63.2849 45.53 63.2849 36.3705C63.2849 27.2109 55.8289 19.7549 46.6694 19.7549Z"
          fill="black"
        />
        <path
          d="M44.1114 49.8258C43.2225 49.8258 42.361 49.5086 41.6796 48.9212L34.5838 42.8044C33.0291 41.4612 32.8529 39.1116 34.1961 37.557C35.5393 36.0023 37.8888 35.8261 39.4435 37.1693L43.4379 40.6153L52.6561 27.5986C53.8426 25.9225 56.1648 25.527 57.8409 26.7135C59.5169 27.9001 59.9124 30.2223 58.7259 31.8983L47.1424 48.2515C46.5354 49.1052 45.5995 49.6652 44.5578 49.7945C44.409 49.814 44.2563 49.8219 44.1075 49.8219L44.1114 49.8258Z"
          fill="#FE6437"
        />
      </svg>
    </div>
  );
}
