import React from "react";

export const FadeInSection = ({ children }) => {
  const domRef = React.useRef();
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const domRefCurrent = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRefCurrent);
      } else {
        setVisible(false);
      }
    });
    observer.observe(domRef.current);

    return () => observer.unobserve(domRefCurrent);
  });

  return (
    <section ref={domRef} className={isVisible ? "is-visible" : ""}>
      {children}
    </section>
  );
};
