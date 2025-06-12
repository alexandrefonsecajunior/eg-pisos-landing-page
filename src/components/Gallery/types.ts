export interface ImageData {
  src: string;
  alt: string;
  title: string;
  serviceType: string;
  description: string;
  application: string;
  finishes?: string[];
  advantages: string[];
  thickness?: string;
  trafficRelease?: {
    light: string;
    normal: string;
  };
  productivity?: string;
}
