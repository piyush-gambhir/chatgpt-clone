"use client";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

import Modal from "@/components/modals/modal";
import CustomIcon from "@/components/ui/custom-icons";

import { getSharedLinks } from "@/data/shared-links";

import { SharedLink } from "@/lib/types";

type Props = {
  onClose: () => void;
};

export default function SharedLinksModal({ onClose }: Props) {
  const [loading, setLoading] = useState(true);
  const [sharedLinks, setSharedLinks] = useState<SharedLink[]>([]);

  const fetchSharedLinks = useCallback(async () => {
    try {
      const sharedLinks = (await getSharedLinks()) as SharedLink[];
      setSharedLinks((prev) => [...prev, ...sharedLinks!]);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSharedLinks();
  }, []);

  console.log(sharedLinks);

  return (
    <Modal
      modalHeading="Shared Links"
      className="dark:bg-[#202123] md:max-w-5xl w-full"
      showCloseButton={true}
      onClose={() => onClose()}
    >
      <div className="p-4 md:p-6 ">
        <div className="overflow-y-auto text-gray-600 dark:text-gray-300 text-sm max-h-[28rem]">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {sharedLinks.length === 0 ? (
                <div className="pb-8 text-base text-gray-600 dark:text-[#ACACBE]">
                  You have no shared links.
                </div>
              ) : (
                <table className="w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="text-token sticky top-0 z-10 border-b border-black/10 py-2 pr-4 font-medium last:pr-0 dark:border-white/10 text-left ">
                        Name
                      </th>
                      <th className="text-token sticky top-0 z-10 border-b border-black/10 py-2 pr-4 font-medium last:pr-0 dark:border-white/10 text-left">
                        Date shared
                      </th>
                      <th className="text-token sticky top-0 z-10 border-b border-black/10 py-2 pr-4 font-medium last:pr-0 dark:border-white/10 text-right">
                        <button className="items-center text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400">
                          <CustomIcon
                            iconName="HorizontalDots"
                            className="w-4 h-4"
                          />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sharedLinks.map((sharedLink) => (
                      <tr key={sharedLink.id} className="">
                        <td className="border-b border-black/10 pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&amp;]:border-b-0 text-left">
                          <div className="flex min-h-[40px] items-center [tr[data-disabled=true]_&amp;]:opacity-50">
                            <Link
                              href="/share/2a880663-c764-4296-9db3-2cdb4d3ae5bc"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400"
                            >
                              <CustomIcon
                                iconName="Hyperlink"
                                className="w-4 h-4"
                              />
                              {sharedLink.title}
                            </Link>
                          </div>
                        </td>
                        <td className="border-b border-black/10 pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&amp;]:border-b-0 text-left">
                          <div className="flex min-h-[40px] items-center [tr[data-disabled=true]_&amp;]:opacity-50">
                            {sharedLink.createdAt.toDateString()}
                          </div>
                        </td>
                        <td className="border-b border-black/10 pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&amp;]:border-b-0 text-left">
                          <div className="flex min-h-[40px] items-center [tr[data-disabled=true]_&amp;]:opacity-50">
                            <div className="text-md flex items-center justify-end gap-2">
                              <span className="" data-state="closed">
                                <Link
                                  href="/c/d44d14c4-a2b9-4fe0-a5e6-0ac2a9a6add0"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="View source chat"
                                  className="cursor-pointer text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                                >
                                  <CustomIcon
                                    iconName="Message"
                                    className="w-4 h-4"
                                  />
                                </Link>
                              </span>
                              <span className="" data-state="closed">
                                <button
                                  aria-label="Delete shared link"
                                  className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                                >
                                  <CustomIcon
                                    iconName="Bin"
                                    className="w-4 h-4"
                                  />
                                </button>
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
