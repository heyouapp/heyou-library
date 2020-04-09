export interface LottieProps {
    source: string | { uri: string };
    callback?: () => void;
    loop?: boolean;
    autoPlay?: boolean;
}
