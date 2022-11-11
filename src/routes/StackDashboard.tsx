import Icon from "../images/Icon.svg";

const StackDashboardExtension = () => {
  return (
    <div className="dashboard flex h-screen justify-center">
      <div className="dashboard-container p-10">
        <div className="dashboard-icon flex justify-center">
          <img src={Icon} alt="icon" />
        </div>

        <div className="app-component-content  text-center  p-7">
          <h4 className="not-italic font-extrabold text-2xl	 text-green-800 self-stretch	 underline">
            Dashboard Widget
          </h4>

          <p className="p-7 text-sm">
            This is the iframe that contains your dashboard widget
            <br />
            Build you app now
          </p>
          <a
            className="text-sky-600 text-sm"
            target="_blank"
            rel="noreferrer"
            href="https://www.contentstack.com/docs/developers/developer-hub/dashboard-location/">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default StackDashboardExtension;
