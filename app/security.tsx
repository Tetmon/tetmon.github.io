"use client";

import { DINish } from "./fonts";

// @ts-ignore
import riveWASMResource from '@rive-app/canvas/rive.wasm';
import Rive, { useRive, Layout, Fit, Alignment, Rive as RType, RuntimeLoader } from "@rive-app/react-canvas";
import { useEffect, useRef, useState } from "react";

RuntimeLoader.setWasmUrl(riveWASMResource);

export default function App() {
  const granularRef = useRef(null);
  const internalRef = useRef(null);
  const encryptionRef = useRef(null);
  const granularInlineRef = useRef(null);
  const internalInlineRef = useRef(null);
  const encryptionInlineRef = useRef(null);
  const riveRef = useRef<RType>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const [showHalo, toggleHalo] = useState(false);

  let { RiveComponent, rive } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "security.riv",
    artboard: "Granular_Artboard",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: ["Granular", "Internal", "Encryption"],
    onLoop: (event) => {
      console.log("Looping", event);
    },
    onLoad: (event) => {
      console.log("Loaded", event);
      // rive?.play();
    },
    onPlay: (event) => {
      console.log("Playing", event);
    },
    // onAdvance: (event) => { console.log("Advance", event); },
    onStateChange: (event) => {
      console.log("State Change", event);

      if (Array.isArray(event.data) && event.data.includes("exit")) {
        console.log('stop--')
        // setIsPlaying(false);
        // riveRef.current?.reset();
        // riveRef.current?.play("Granular");
        // globalRive?.stopRendering();
        // rive.
      }
    },
    onStop: (event) => { console.log("Stopped", event, riveRef.current); },
    // onAdvance: (event) => { console.log("Advanced", event); },
    onPause: (event) => { console.log("Paused", event, rive); },
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.Contain,
      // fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.TopCenter,
      // maxX: 500,
      // minY: 500
    }),
    autoplay: true,
  });

  let { RiveComponent: GranularRiveComponent, rive: granularRive } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "security.riv",
    artboard: "Granular_Artboard",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: ["Granular"],
    onLoop: (event) => {
      console.log("Looping", event);
    },
    onLoad: (event) => {
      console.log("Loaded", event);
      // rive?.play();
    },
    onPlay: (event) => {
      console.log("Playing", event);
    },
    // onAdvance: (event) => { console.log("Advance", event); },
    onStateChange: (event) => {
      console.log("State Change", event);

      if (Array.isArray(event.data) && event.data.includes("exit")) {
        console.log('stop--')
        // setIsPlaying(false);
        // riveRef.current?.reset();
        // riveRef.current?.play("Granular");
        // globalRive?.stopRendering();
        // rive.
      }
    },
    onStop: (event) => { console.log("Stopped", event, riveRef.current); },
    // onAdvance: (event) => { console.log("Advanced", event); },
    onPause: (event) => { console.log("Paused", event, rive); },
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth,
      // fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.TopCenter,
      // maxX: 500,
      // minY: 500
    }),
    autoplay: true,
  });


  let { RiveComponent: InternalRiveComponent, rive: internalRive } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "security.riv",
    artboard: "Internal_Artboard",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: ["Internal"],
    onLoop: (event) => {
      console.log("Looping", event);
    },
    onLoad: (event) => {
      console.log("Loaded", event);
      // rive?.play();
    },
    onPlay: (event) => {
      console.log("Playing", event);
    },
    // onAdvance: (event) => { console.log("Advance", event); },
    onStateChange: (event) => {
      console.log("State Change", event);

      if (Array.isArray(event.data) && event.data.includes("exit")) {
        console.log('stop--')
        // setIsPlaying(false);
        // riveRef.current?.reset();
        // riveRef.current?.play("Granular");
        // globalRive?.stopRendering();
        // rive.
      }
    },
    onStop: (event) => { console.log("Stopped", event, riveRef.current); },
    // onAdvance: (event) => { console.log("Advanced", event); },
    onPause: (event) => { console.log("Paused", event, rive); },
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth,
      // fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.TopCenter,
      // maxX: 500,
      // minY: 500
    }),
    autoplay: true,
  });

  let { RiveComponent: EncryptionRiveComponent, rive: encryptionRive } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "security.riv",
    artboard: "Encryption_Artboard",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: ["Encryption"],
    onLoop: (event) => {
      console.log("Looping", event);
    },
    onLoad: (event) => {
      console.log("Loaded", event);
      // rive?.play();
    },
    onPlay: (event) => {
      console.log("Playing", event);
    },
    // onAdvance: (event) => { console.log("Advance", event); },
    onStateChange: (event) => {
      console.log("State Change", event);

      if (Array.isArray(event.data) && event.data.includes("exit")) {
        console.log('stop--')
        // setIsPlaying(false);
        // riveRef.current?.reset();
        // riveRef.current?.play("Granular");
        // globalRive?.stopRendering();
        // rive.
      }
    },
    onStop: (event) => { console.log("Stopped", event, riveRef.current); },
    // onAdvance: (event) => { console.log("Advanced", event); },
    onPause: (event) => { console.log("Paused", event, rive); },
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth,
      // fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.TopCenter,
      // maxX: 500,
      // minY: 500
    }),
    autoplay: true,
  });

  useEffect(() => {
    if (!granularRef.current || !internalRef.current || !encryptionRef.current || !containerRef.current) {
      return;
    }

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          console.log('entry', entry.target.id);
          toggleHalo(true);
          // console.log('Log event and unobserve: granular');
          // observer.unobserve(entry.target);
          if (entry.target.id === 'encryption' && rive) {
            rive.reset({ artboard: "Encryption_Artboard" });
            try {
              rive.play("Encryption");
            } catch (ex) {
              console.log('Error playing rive')
            }
          }
          else if (entry.target.id === 'internal' && rive) {
            rive.reset({ artboard: "Internal_Artboard" });
            try {
              rive.play("Internal");
            } catch (ex) {
              console.log('Error playing rive')
            }
          }
          else if (rive) {
            toggleHalo(true)
            rive.reset({ artboard: "Granular_Artboard" });
            try {
              rive.play("Granular");
            } catch (ex) {
              console.log('Error playing rive')
            }
          }
          // if (riveRef.current) {
          //   riveRef.current?.play("Granular");
          // }
        } else {
          console.log('exit', entry.target.id);
          // toggleHalo(false);
        }
      });
    }, options);

    observer.observe(granularRef.current);
    observer.observe(internalRef.current);
    observer.observe(encryptionRef.current);
    // observer.observe(containerRef.current);

    let containerObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          console.log('container enter')
          toggleHalo(true);
        } else {
          console.log('container exit')
          toggleHalo(false);
        }
      });
    }, {
      threshold: 0.2
    });

    containerObserver.observe(containerRef.current)
  });

  // useEffect(() => {
  //   if (!containerRef.current) {
  //     return;
  //   }
  //   let containerObserver = new IntersectionObserver((entries) => {
  //     entries.map((entry) => {
  //       if (entry.isIntersecting) {
  //         document.dispatchEvent(new Event('security-enter'));
  //       } else {
  //         document.dispatchEvent(new Event('security-exit'));
  //       }
  //     });
  //   }, {
  //     threshold: 0.2
  //   });

  //   containerObserver.observe(containerRef.current)
  // }, []);

  useEffect(() => {
    if (granularInlineRef.current && granularRive) {
      let containerObserver = new IntersectionObserver((entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            console.log('granularInlineRef', granularInlineRef.current, granularRive);
            if (granularRive) {
              granularRive.reset({ artboard: "Granular_Artboard" });
              try {
                granularRive.play("Granular");
                granularRive = null;
              } catch (ex) {
                console.log('Error playing rive')
              }
            }
          }
        });
      }, {
        threshold: 0.2
      });
      containerObserver.observe(granularInlineRef.current);
    }

    if (internalInlineRef.current && internalRive) {
      let containerObserver = new IntersectionObserver((entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            console.log('internalInlineRef', internalInlineRef.current, internalRive);
            if (internalRive) {
              internalRive.reset({ artboard: "Internal_Artboard" });
              try {
                internalRive.play("Internal");
                internalRive = null;
              } catch (ex) {
                console.log('Error playing rive')
              }
            }
          }
        });
      }, {
        threshold: 0.2
      });
      containerObserver.observe(internalInlineRef.current);
    }

    if (encryptionInlineRef.current && encryptionRive) {
      let containerObserver = new IntersectionObserver((entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            console.log('encryptionInlineRef', encryptionInlineRef.current, encryptionRive);
            if (encryptionRive) {
              encryptionRive.reset({ artboard: "Encryption_Artboard" });
              try {
                encryptionRive.play("Encryption");
                encryptionRive = null;
              } catch (ex) {
                console.log('Error playing rive')
              }
            }
          }
        });
      }, {
        threshold: 0.2
      });
      containerObserver.observe(encryptionInlineRef.current);
    }
  }, [rive, internalRive, encryptionRive]);

  return (
    <>
      <section id="container" ref={containerRef} className="hidden lg:block relative z-[-1] bg-neutral-900 text-zinc-100">
        {/* {showHalo ? <div className="pointer-events-none fixed top-0 h-full w-full bg-halo-gradient">
        </div> : null} */}
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center p-10">
            <div className="flex items-center">
              <svg width="46" height="60" viewBox="0 0 76 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 9L37.5 1L0.5 9V50C5.43554 73.1971 14.5763 80.8624 37.5 89C59.852 81.724 68.2222 73.3816 75 50V9Z" fill="black" stroke="#323637" />
                <path d="M69 14.7273L37.7919 8L7 14.7273V49.2045C11.1074 68.7112 18.7145 75.157 37.7919 82C56.3936 75.8815 63.3594 68.8663 69 49.2045V14.7273Z" fill="black" stroke="#323637" />
                <path d="M54.6921 32.0196L32.9111 53.8046C32.6806 54.0351 32.3056 54.0351 32.0713 53.8046L21.1803 42.9096C20.6295 42.3588 21.4654 41.519 22.0201 42.0698L32.4931 52.5428L43.1746 41.8613L53.8561 31.1798C54.4069 30.629 55.2468 31.4688 54.6921 32.0196Z" fill="#2995B9" />
              </svg>
              <h2 className={`text-3xl font-bold ${DINish.className} pl-2`}>Security-focused</h2>
            </div>
            <p className={`${DINish.className} pt-6 text-xl`}>EdgeSet addresses all<span className="font-bold text-primaryLight"> three</span> classes of threat vectors.</p>
          </div>
          <div className="grid grid-cols-12">
            <div className="relative col-span-5 col-start-2 xl:col-start-3 grid grid-rows-[420px_800px_600px] gap-y-[120px]">
              <div id="granular" ref={granularRef} className="flex gap-4">
                <div className="hidden text-stroke absolute left-[-35%] top-0 bg-clip-text xl:block text-[135px] font-black">01</div>
                <div className="self-center">
                  <h3 className={`text-3xl font-bold ${DINish.className} py-4`}>To counter <span className="text-primaryLight">Insider Threats</span></h3>
                  <ul className={`${DINish.className} max-w-lg`}>
                    <li className="text-xl">
                      EdgeSet has fine-grained access controls.
                    </li>
                    <li className="text-lg pt-2">
                      Grant and restrict access at the data source, table, and column level.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="internal" ref={internalRef} className="relative flex flex-col justify-center gap-4">
                <div className="hidden text-stroke absolute left-[-38%] top-[80px] bg-clip-text xl:block text-[135px] font-black">02</div>
                <h2 className={`text-3xl font-bold ${DINish.className}`}>To counter <span className="text-primaryLight">Vendor Threats</span></h2>
                <p className={`${DINish.className} text-xl`}>Your data is not sent to us.</p>
                <div className="flex max-w-lg flex-col gap-4">
                  <div className="relative opacity-80 hover:opacity-100">
                    <div className="absolute right-0 bg-red-500 p-1 text-sm">Vendor</div>
                    <ul className={`${DINish.className} rounded-md border border-red-400 p-3 text-lg`}>
                      <li className="before:pr-2 before:content-['_•']">Your data moves to the vendor’s cloud.</li>
                      <li className="before:pr-2 before:content-['_•']">Your data is subject to search/seizure in vendor’s legal jurisdiction.</li>
                      <li className="before:pr-2 before:content-['_•']">Vendor’s employees can leak your data.</li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute right-0 bg-primaryLight p-1 text-sm">Edgeset</div>
                    <ul className={`${DINish.className} rounded-md border border-primaryLight p-3 text-lg`}>
                      <li className="before:pr-2 before:content-['_•']">Tetmon’s employees cannot access your data.</li>
                      <li className="before:pr-2 before:content-['_•']">Your data does not leave your network.</li>
                      <li className="before:pr-2 before:content-['_•']">Data sovereignty is preserved.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="encryption" ref={encryptionRef} className="relative flex flex-col gap-4">
                <div className="hidden text-stroke absolute left-[-36%] top-[-115px] bg-clip-text xl:block text-[135px] font-black">03</div>
                <h2 className={`text-3xl font-bold ${DINish.className}`}>To counter <span className="text-primaryLight">External Threats</span></h2>
                <p className={`${DINish.className} text-xl`}>EdgeSet was designed with hardened security from the ground up.</p>
                <ul className={`${DINish.className} max-w-lg text-lg`}>
                  <li className="before:pr-2 before:content-['_•']">
                    All database credentials are stored encrypted with 256-bit security.
                  </li>
                  <li className="before:pr-2 before:content-['_•']">
                    Passwords are hashed with memory-hard algorithms to protect against GPU attacks.
                  </li>
                  <li className="before:pr-2 before:content-['_•']">
                    All connections are encrypted with either TLS or SSH, without exception.
                  </li>
                  <li className="before:pr-2 before:content-['_•']">
                    Automatic penetration testing of all builds in virtualized network simulations.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-start-8 col-end-12 gap-4">
              <div className="sticky top-72 flex justify-start">
                <div className="h-96 w-96">
                  <RiveComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="container" className="relative z-[-1] bg-neutral-900 text-zinc-100  lg:hidden" ref={containerRef}>
        <div className="grid grid-cols-12 py-8">
          <div className="col-start-2 col-span-10 grid [grid-template-columns:subgrid]">
            <div className="flex w-full justify-center col-span-full py-5">
              <svg className="w-10 h-10" viewBox="0 0 76 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 9L37.5 1L0.5 9V50C5.43554 73.1971 14.5763 80.8624 37.5 89C59.852 81.724 68.2222 73.3816 75 50V9Z" fill="black" stroke="#323637" />
                <path d="M69 14.7273L37.7919 8L7 14.7273V49.2045C11.1074 68.7112 18.7145 75.157 37.7919 82C56.3936 75.8815 63.3594 68.8663 69 49.2045V14.7273Z" fill="black" stroke="#323637" />
                <path d="M54.6921 32.0196L32.9111 53.8046C32.6806 54.0351 32.3056 54.0351 32.0713 53.8046L21.1803 42.9096C20.6295 42.3588 21.4654 41.519 22.0201 42.0698L32.4931 52.5428L43.1746 41.8613L53.8561 31.1798C54.4069 30.629 55.2468 31.4688 54.6921 32.0196Z" fill="#2995B9" />
              </svg>
              <h2 className={`text-2xl font-bold  ${DINish.className} pl-2`}>Security-focused</h2>
            </div>
            <p className={`${DINish.className} text-lg col-span-full text-center`}>EdgeSet addresses all<span className="font-bold text-primaryLight"> three</span> classes of threat vectors.</p>
            <div className="col-span-full py-8 pt-16 flex flex-col place-items-center" ref={granularInlineRef}>
              <h3 className={`text-2xl font-bold ${DINish.className} py-4`}>To counter <span className="text-primaryLight">Insider Threats</span></h3>
              <div className="h-64 w-64 mx-auto">
                <GranularRiveComponent />
              </div>
              <ul className={`${DINish.className} max-w-md`}>
                <li className="text-lg">
                  EdgeSet has fine-grained access controls.
                </li>
                <li className="text-lg pt-2">
                  Grant and restrict access at the data source, table, and column level.
                </li>
              </ul>
            </div>

            <div className="col-span-full py-8 flex flex-col place-items-center" ref={internalInlineRef}>
              <h3 className={`text-2xl font-bold ${DINish.className} py-4`}>To counter <span className="text-primaryLight">Vendor Threats</span></h3>
              <div className="h-64 w-64 mx-auto relative top-[-36px]">
                <InternalRiveComponent />
              </div>
              <p className={`${DINish.className} text-lg`}>Your data is not sent to us.</p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="relative opacity-80 hover:opacity-100">
                  <div className={`${DINish.className} absolute right-0 bg-red-500 p-1 text-xs`}>Vendor</div>
                  <ul className={`${DINish.className} rounded-md border border-red-400 p-3 pt-6 text-base`}>
                    <li className="before:pr-2 before:content-['_•']">Your data moves to the vendor’s cloud.</li>
                    <li className="before:pr-2 before:content-['_•']">Your data is subject to search/seizure in vendor’s legal jurisdiction.</li>
                    <li className="before:pr-2 before:content-['_•']">Vendor’s employees can leak your data.</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className={`${DINish.className} absolute right-0 bg-primaryLight p-1 text-xs`}>Edgeset</div>
                  <ul className={`${DINish.className} rounded-md border border-primaryLight p-3 pt-6 text-base`}>
                    <li className="before:pr-2 before:content-['_•']">Tetmon’s employees cannot access your data.</li>
                    <li className="before:pr-2 before:content-['_•']">Your data does not leave your network.</li>
                    <li className="before:pr-2 before:content-['_•']">Data sovereignty is preserved.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-full py-8  flex flex-col place-items-center" ref={encryptionInlineRef}>
              <h3 className={`text-2xl font-bold ${DINish.className} py-4`}>To counter <span className="text-primaryLight">External Threats</span></h3>
              <div className="h-72 w-64 mx-auto relative top-[-16px]">
                <EncryptionRiveComponent />
              </div>
              <p className={`${DINish.className} text-lg`}>EdgeSet was designed with hardened security from the ground up.</p>
              <ul className={`${DINish.className} text-base flex flex-col gap-4 pt-4 max-w-lg`}>
                <li className="before:pr-2 before:content-['_•']">
                  All database credentials are stored encrypted with 256-bit security.
                </li>
                <li className="before:pr-2 before:content-['_•']">
                  Passwords are hashed with memory-hard algorithms to protect against GPU attacks.
                </li>
                <li className="before:pr-2 before:content-['_•']">
                  All connections are encrypted with either TLS or SSH, without exception.
                </li>
                <li className="before:pr-2 before:content-['_•']">
                  Automatic penetration testing of all builds in virtualized network simulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}