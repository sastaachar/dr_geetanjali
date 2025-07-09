"use client";

import { useState, useEffect } from "react";

export function createApiHook<ApiRequest, ApiResponse>(
  api: (...req: ApiRequest[]) => Promise<ApiResponse>
) {
  return (...req: ApiRequest[]) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      setLoading(true);
      api(...req)
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }, [req]);

    return {
      loading,
      data,
      error,
    };
  };
}
