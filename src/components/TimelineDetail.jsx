import { useEffect, useRef } from "react";

export default function TimelineDetail({ timelineDetail, showModal, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (showModal && !dialog.open) {
      dialog.showModal();
      return;
    }
    if (!showModal && dialog.open) {
      dialog.close();
    }
  }, [showModal]);

  if (!timelineDetail) {
    return <dialog ref={dialogRef} onClose={onClose} />;
  }

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={handleBackdropClick}>
      <div onClick={(event) => event.stopPropagation()}>
        <div className="dialog_info">
          <img
            src={`/${timelineDetail.img}`}
            alt=""
            className="rounded_img company_icon_bg img_contain"
          />
          <div className="dialog_info_desc">
            <h1>{timelineDetail.title}</h1>
            <p>{timelineDetail.description}</p>
            {timelineDetail.techStacks && (
              <div className="dialog_info_tech_stacks">
                {timelineDetail.techStacks.map((stack) => (
                  <div className="dialog_chipper" key={stack}>
                    {stack}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="dialog_context">
          {timelineDetail.projects?.length > 0 && (
            <>
              <div className="flex">
                <img
                  src="/project.png"
                  alt=""
                  className="company_icon_sm img_contain"
                />
                <h2>Projects@{timelineDetail.title.split(":")[0]}</h2>
              </div>
              {timelineDetail.projects.map((project) => (
                <div key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="dialog_chippers">
                    {project.tags.map((tag) => (
                      <div className="dialog_chipper" key={`${project.title}-${tag}`}>
                        {tag}
                      </div>
                    ))}
                  </div>
                  <br />
                </div>
              ))}
            </>
          )}
          {timelineDetail.certs?.length > 0 && (
            <>
              <div className="flex">
                <img
                  src="/quality.png"
                  alt=""
                  className="company_icon_sm img_contain"
                />
                <h2>Certificates@{timelineDetail.title.split(":")[0]}</h2>
              </div>
              {timelineDetail.certs.map((cert) => (
                <div key={cert.title}>
                  {cert.link ? (
                    <p>
                      <a href={`/certs/${cert.link}`}>{cert.title}</a>
                    </p>
                  ) : (
                    <p>{cert.title}</p>
                  )}
                  <p>{cert.description}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
